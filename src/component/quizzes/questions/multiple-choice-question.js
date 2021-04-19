import React, {useEffect} from 'react'

const MultipleChoiceQuestion = ({question, questionSetAnswer, answer, graded}) => {

    useEffect(()=> {

    }, [answer])
    return (
        <ul className="options">
            {
                question.choices.map((choice, index) => {
                    const selected = answer === choice
                    const selectedGradedButWrong = selected && graded && (answer !== question.correct)
                    const correctAnswer = graded && (choice === question.correct)
                    return (
                        <li key={index}
                        className='list-group'>
                            <div className={`list-group-item
                            ${selectedGradedButWrong? 'list-group-item-danger':''}
                            ${correctAnswer? 'list-group-item-success':''}`}>
                                <div className='row'>
                                    <div className='col-8'>
                                        <label>
                                            <input
                                                className='mr-1'
                                                disabled={(!!graded)}
                                                checked={answer === choice}
                                                onClick={()=>{questionSetAnswer(choice)}}
                                                type="radio" name={question._id}/>
                                              {choice}
                                        </label>
                                    </div>
                                    <div className='col-4'>
                                        {correctAnswer &&
                                             <i className="correct-mark float-right fas fa-check"/>
                                        }
                                        {selectedGradedButWrong &&
                                             <i className="wrong-mark float-right fas fa-times"/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MultipleChoiceQuestion