import { Link } from "react-router";
import { CheckCircle, Clock, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [completedSurveys, setCompletedSurveys] = useState<any[]>([]);
    const [hasInitialSurvey, setHasInitialSurvey] = useState(false);

    useEffect(() => {
        const surveys = JSON.parse(localStorage.getItem("studentSurveys") || "[]");
        setCompletedSurveys(surveys);
        setHasInitialSurvey(surveys.length > 0);
    }, []);

    const calculateAverageScore = (ratings: Record<string, number>) => {
        const values = Object.values(ratings);
        const sum = values.reduce((acc, val) => acc + val, 0);
        return (sum / values.length).toFixed(1);
    };

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-page">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>Welcome to the Lighthouse Leaders Dashboard! Here you can view and manage your surveys, track responses, and analyze results.</p>
                </div>

                <div className="dashboard-content">
                    {/* Available Surveys */}
                    <div className="dashboard-panel">
                        <div className="dashboard-panel-header">
                            <Clock className="dashboard-panel-icon" />
                            <h2>Available Surveys</h2>
                        </div>

                        <div className="dashboard-panel-list">
                            {!hasInitialSurvey ? (
                                <Link to="/survey" className="dashboard-survey-initial">
                                    <div className="dashboard-survey-initial-header">
                                        <PlayCircle className="dashboard-survey-initial-icon" />
                                        <h3>SHINE Leader Self-Assessment</h3>
                                    </div>
                                    <p>Complete your initial leadership development assessment</p>
                                    <div className="dashboard-survey-badge">Start Your Journey</div>
                                </Link>
                            ) : (
                                <Link to="/survey" className="dashboard-survey-followup">
                                    <h3>SHINE Follow-Up Assessment</h3>
                                    <p>Track your progress and see how you've grown</p>
                                    <p className="dashboard-survey-followup-meta">7 capabilities • PhotoVoice included</p>
                                </Link>
                            )}

                            {completedSurveys.length === 0 && (
                                <div className="dashboard-empty-box">
                                    <p>Complete your first survey to start tracking your leadership journey!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Completed Surveys */}
                    <div className="dashboard-panel">
                        <div className="dashboard-panel-header">
                            <CheckCircle className="dashboard-panel-icon" />
                            <h2>Completed Surveys</h2>
                        </div>

                        <div className="dashboard-panel-list">
                            {completedSurveys.length > 0 ? (
                                completedSurveys.map((survey, index) => (
                                    <div key={survey.id} className="dashboard-completed-item">
                                        <div className="dashboard-completed-item-inner">
                                            <div>
                                                <div className="dashboard-completed-item-meta">
                                                    <h3>
                                                        SHINE {survey.type === "initial" ? "Initial" : "Follow-Up"} Assessment
                                                    </h3>
                                                    {index === completedSurveys.length - 1 && (
                                                        <span className="dashboard-latest-badge">Latest</span>
                                                    )}
                                                </div>
                                                <p className="dashboard-completed-date">
                                                    Completed: {new Date(survey.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="dashboard-score">
                                                <p>Avg Score</p>
                                                <p className="dashboard-score-value">{calculateAverageScore(survey.ratings)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="dashboard-empty-box dashboard-empty-box--center">
                                    <CheckCircle className="dashboard-empty-icon" />
                                    <p>No completed surveys yet</p>
                                    <p className="dashboard-empty-subtext">Your survey history will appear here</p>
                                </div>
                            )}
                        </div>

                        {completedSurveys.length > 0 && (
                            <Link to="/analytics" className="dashboard-analytics-link">
                                View Detailed Analytics
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;