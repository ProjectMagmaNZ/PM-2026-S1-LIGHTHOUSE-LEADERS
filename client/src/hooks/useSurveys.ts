import { useEffect, useState } from "react";
import { listAvailableSurveys, type SurveyListItemWithStatus } from "../services/surveys";

export const useSurveys = (): { surveys: SurveyListItemWithStatus[]; loading: boolean; error: string | null } => {
  const [surveys, setSurveys] = useState<SurveyListItemWithStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await listAvailableSurveys();
        // Normalize to an array
        const list = Array.isArray(data) ? data : (data as any)?.surveys ?? [];
        if (mounted) setSurveys(list as SurveyListItemWithStatus[]);
      } catch (err: any) {
        if (mounted) setError(err?.response?.data?.detail ?? "Failed to load surveys");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { surveys, loading, error };
}