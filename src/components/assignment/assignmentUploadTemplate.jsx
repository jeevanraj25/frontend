import React, { useState } from 'react';

const AssignmentUploadTemplate = ({ csvData, data }) => {
    const csvDataNew = csvData.filter((value, index) => index < csvData.length - 1);

    const questions = csvDataNew.slice(1).map(value => {
        const obj = {
            question: value[0],
            options: value[1] ? value[1].split(',') : [] // Extract options for MCQs
        };
        return obj;
    });

    const correctAns = csvDataNew.slice(1).map(value => {
        return value[2];
    });

    // Ensure correctAns array has the same length as questions array
    if (correctAns.length !== questions.length) {
        console.error("Number of correct answers does not match number of questions.");
        return null; // Or handle the error appropriately
    }

    const [submit, setSubmit] = useState(false);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [lowerCaseAns, setLowerCaseAns] = useState(Array(questions.length).fill(''));
    const [result, setResult] = useState(Array(questions.length).fill(''));

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!submit){
            setSubmit(true);
            const newAnswers = [];
            const newLowerCaseAns = [];
            const formData = new FormData(e.target);
            for (let i = 0; i < questions.length; i++) {
                const answer = (formData.get(`answer${i + 1}`) || 'Did not attended the question').trim(); // Trim user input
                newAnswers.push(answer);
                newLowerCaseAns.push(answer.toLowerCase().replace(/[\s,]/g, ''));
            }
            setAnswers(newAnswers);
            setLowerCaseAns(newLowerCaseAns);
            const newResult = newLowerCaseAns.map((answer, index) => {
                const trimmedCorrectAns = correctAns[index].toLowerCase();
                if (trimmedCorrectAns === '---') {
                    return answer === '' || answer === '---' ? 'correct' : 'incorrect'; // Consider correct if user's answer is blank
                } else if (trimmedCorrectAns.includes('/')) {
                    const possibleAnswers = trimmedCorrectAns.split('/');
                    return possibleAnswers.map(possAns => possAns.trim().toLowerCase()).includes(answer) ? 'correct' : 'incorrect';
                } else {
                    return answer === trimmedCorrectAns ? 'correct' : 'incorrect';
                }
            });
            setResult(newResult);
        }
        else{
            setSubmit(false)
            setAnswers(Array(questions.length).fill(''))
            setLowerCaseAns(Array(questions.length).fill(''))
            setResult(Array(questions.length).fill(''))

        }
    };
    return (
        <div className='p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col border border-gray-400 rounded-md max-w-[1024px] w-max mx-auto p-3'>
                <h1 className='text-3xl font-bold text-center p-3'>Assignment</h1>
                <div className='my-5 text-lg font-semibold'>
                    <h2><span>*</span>{data.title}</h2>
                </div>
                {questions.map((value, index) => {
                    return (
                        <div key={index} className='my-2 md:text-lg text-md'>
                            <p className='mt-1'>{value.question}</p>
                            {data.type === 'mcq' ? (
                                value.options.map((option, optIndex) => (
                                    <div key={optIndex} className='flex '>
                                        <input
                                            type='radio'
                                            name={`answer${index + 1}`}
                                            value={option.trim()}
                                            disabled={submit}
                                        />
                                     <label  className="block mx-2"> 
                                     {option}  
                                    </label>
                                    </div>
                                ))
                            ) : (
                                <input
                                    type='text'
                                    name={`answer${index + 1}`}
                                    className={`${submit && "hidden"} font-semibold border w-full p-1 rounded-lg`}
                                    placeholder='Enter Answer'
                                />
                            )}
                            {submit && (
                                <>
                                    <p className='font-semibold'>Your Answer : <span className={`${result[index] === "correct" ? "text-green-500" : "text-red-500"} font-semibold`}>{answers[index]}</span></p>
                                    <p className='font-semibold'>Correct Answer is : <span className='text-green-500 font-semibold'>{correctAns[index]}</span></p>
                                </>
                            )}
                        </div>
                    )
                })}
                <div className='py-3 mx-auto'>
                    <button type='submit' className='px-3 py-2 bg-gray-700 font-semibold text-lg text-white rounded-lg'>{submit ? "Reset" : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default AssignmentUploadTemplate;
