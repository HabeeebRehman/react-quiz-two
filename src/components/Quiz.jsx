import React from 'react'
import './Quiz.css'
import data from '../resources/quizQuestion.json'
import { useState } from'react'

function QuizContainer() {

    const [state, setState] = useState(0);

    const handelNext = () => {
        if(state == data.length-1){
            setState(0)
        }else{
            setState(state+1)
        }
    }
    const handelPrevious = () => {
        if(state ==0){
            setState(data.length-1)
        }else{
            setState(state-1)
        }
    }
    const HandelQuit = () => {
        let userClick = confirm('Are you sure you want to quit?')
        userClick ? setState(0) : setState(state);
    }

        return (
            <div className="quiz-container">
                <h1 className="question">Question</h1>
                <p className='number'>{state +1}</p>
                <h5 className='main-q'>{data[state].question}</h5>
                <div className='option-cointainer'>
                    <button className="option">{data[state].optionA}</button>
                    <button className="option">{data[state].optionB}</button>
                    <button className="option">{data[state].optionC}</button>
                    <button className="option">{data[state].optionD}</button>
                </div>
                <div className="controls">
                    <button className="control" onClick={handelPrevious}>Previous</button>
                    <button className="control" onClick={handelNext}>Next</button>
                    <button className="control" onClick={HandelQuit}>Quit</button>
                </div>
            </div>
        );
    }


export default QuizContainer;