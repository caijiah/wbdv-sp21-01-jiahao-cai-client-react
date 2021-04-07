import React from 'react'
import MultipleChoiceQuestion from "./multiple-choice-question";

const TrueFalseQuestion = ({question, questionSetAnswer, answer, graded}) => {
    return (
        <MultipleChoiceQuestion
            question={{...question, choices: ['true', 'false']}}
        questionSetAnswer={questionSetAnswer}
        answer={answer}
        graded={graded}/>
        // Learnt that we could actually utilize MultipleChoiceQuestion
        // to generate TrueFalseQuestion by setting choices as ['true', 'false'].
        // This helps remove the redundant code.
        // <ul className='options'>
        //     <li className='list-group'>
        //         <div className={`list-group-item`}>
        //             <label><input
        //                 onClick={()=>questionSetAnswer('true')}
        //                 type='radio'
        //                 name={question._id}/>True</label>
        //         </div>
        //     </li>
        //     <li className='list-group'>
        //         <div className={`list-group-item`}>
        //             <label><input
        //                 type='radio'
        //                 onClick={()=>questionSetAnswer('false')}
        //                 name={question._id}/>False</label>
        //         </div>
        //     </li>
        // </ul>
    )
}

export default TrueFalseQuestion