import { useState } from 'react'

const questions = [
    {
        id: 'q1',
        label: 'Question 1',
        title: 'Q1: How supported do you feel in your current program?',
        type: 'text',
        placeholder: 'Type your answer here...',
    },
    {
        id: 'q2',
        label: 'Question 2',
        title: 'Q2: Rate your level of engagement with the activities.',
        type: 'rating',
    },
    {
        id: 'q3',
        label: 'Question 3',
        title: 'Q3: What suggestions do you have for improvement?',
        type: 'text',
        placeholder: 'Type your answer here...',
    },
    {
        id: 'q4',
        label: 'Question 4',
        title: 'Q4: How would you rate the communication within your team?',
        type: 'rating',
    },
    {
        id: 'q5',
        label: 'Question 5',
        title: "Q5: Rate your confidence in applying what you've learned.",
        type: 'rating',
    },
    {
        id: 'q6',
        label: 'Question 6',
        title: 'Q6: How satisfied are you with the program resources?',
        type: 'rating',
    },
    {
        id: 'q7',
        label: 'Question 7',
        title: 'Q7: Rate your overall experience with the program.',
        type: 'rating',
    },
] as const

const ratingScale = [1, 2, 3, 4, 5]

const Survey = () => {
    const [activeQuestion, setActiveQuestion] = useState('q1')
    const [ratings, setRatings] = useState<Record<string, number>>({})

    const scrollToQuestion = (questionId: string) => {
        const section = document.getElementById(questionId)

        if (section) {
            setActiveQuestion(questionId)
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <main className="survey-page">
            <aside className="survey-sidebar">
                <div className="survey-sidebar-list">
                    <p className="survey-sidebar-title">Survey Navigation:</p>
                    {questions.map((question) => (
                        <button
                            key={question.id}
                            type="button"
                            className={`survey-sidebar-item${activeQuestion === question.id ? ' is-active' : ''}`}
                            onClick={() => scrollToQuestion(question.id)}
                        >
                            {question.label}
                        </button>
                    ))}
                </div>
            </aside>

            <section className="survey-content">
                <h1 className="survey-title">SURVEY 1</h1>

                {questions.map((question) => (
                    <article
                        key={question.id}
                        id={question.id}
                        className={`survey-card${question.type === 'rating' ? ' survey-card-rating' : ''}`}
                    >
                        <h2 className="survey-question">{question.title}</h2>

                        {question.type === 'text' ? (
                            <textarea
                                className="survey-textarea"
                                placeholder={question.placeholder}
                                rows={4}
                            />
                        ) : (
                            <div className="survey-rating-row">
                                {ratingScale.map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        className={`survey-rating-option${ratings[question.id] === value ? ' is-selected' : ''}`}
                                        onClick={() =>
                                            setRatings((currentRatings) => ({
                                                ...currentRatings,
                                                [question.id]: value,
                                            }))
                                        }
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        )}
                    </article>
                ))}

                <div className="survey-submit-row">
                    <button type="button" className="survey-submit-button">
                        Submit Survey
                    </button>

                    <button type="button" className="survey-clear-button">
                        Clear Survey
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Survey
