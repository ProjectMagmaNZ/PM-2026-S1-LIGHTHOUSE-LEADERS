type Question = {
    id: string
    label: string
}

type SurveyNavProps = {
    questions: readonly Question[]
    activeQuestion: string
    onSelect: (id: string) => void
}

const SurveyNav = ({ questions, activeQuestion, onSelect }: SurveyNavProps) => {
    return (
        <aside className="survey-sidebar">
            <div className="survey-sidebar-list">
                <p className="survey-sidebar-title">Survey Navigation:</p>
                {questions.map((question) => (
                    <button
                        key={question.id}
                        type="button"
                        className={`survey-sidebar-item${activeQuestion === question.id ? ' is-active' : ''}`}
                        onClick={() => onSelect(question.id)}
                    >
                        {question.label}
                    </button>
                ))}
            </div>
        </aside>
    )
}

export default SurveyNav