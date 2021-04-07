import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import "./question.css"

const Question = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [graded, setGraded] = useState(false)

    const questionSetAnswer = (answer) => {
        setAnswer(answer)
    }

    const answerIsCorrect = answer === question.correct
    const answerIsWrong = answer !== question.correct

    return (
        <div className='list-group-item'>
            <div className='row'>
                <div className='col-8'>
                    <h4>{question.question}</h4>
                </div>
                {graded && answerIsCorrect &&
                 <div className='col-4'>
                    <i className="float-right fas fa-check fa-2x"/>
                 </div>
                }
                {graded && answerIsWrong &&
                 <div className='col-4'>
                     <i className="float-right fas fa-times fa-2x"/>
                 </div>
                }
            </div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question}
                                   questionSetAnswer={questionSetAnswer}
                                   answer={answer}
                                   graded={graded}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}
                                        questionSetAnswer={questionSetAnswer}
                                        answer={answer}
                                        graded={graded}/>
            }
            <br/>
            <div>
                Your answer: {answer}
            </div>
            <br/>
            <button className='btn btn-success'
                    onClick={()=>{
                        if (answer) {
                            setGraded(true)
                        } else {
                            alert("You didn't choose an answer!")
                        }
                    }}>Grade</button>
        </div>
    )
}

export default Question