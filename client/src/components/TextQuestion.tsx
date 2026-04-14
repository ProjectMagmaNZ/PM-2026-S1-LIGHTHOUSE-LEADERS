type TextQuestionProps = {
    id: string
    title: string
    placeholder: string
}

const TextQuestion = ({ id, title, placeholder }: TextQuestionProps) => {
    return (
        <article id={id} className="survey-card">
            <h2 className="survey-question">{title}</h2>
            <textarea
                className="survey-textarea"
                placeholder={placeholder}
                rows={4}
            />
        </article>
    )
}

export default TextQuestion