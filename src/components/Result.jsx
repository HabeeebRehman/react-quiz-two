import React from 'react'
import './Result.css'

function Result() {
    return (

        <div className='container'>
            <h1>Result</h1>
            <div className='main-result'>
                <h3>You need more practice!</h3>
                <h2>Your score is 20%</h2>
                <div className='result'>
                    <div className='marks'>
                        <h4>Total number of questions</h4>
                        <h4>15</h4>
                    </div>
                    <div className='marks'>
                        <h4>Number of attempted questions</h4>
                        <h4>9</h4>
                    </div>
                    <div className='marks'>
                        <h4>Number of correct answers</h4>
                        <h4>3</h4>
                    </div>
                    <div className='marks'>
                        <h4>Number of wrong answers</h4>
                        <h4>6</h4>
                    </div>
                </div>
            </div>
            <div className='Btns'>
                <button className='play'>Play Again</button>
                <button className='back'>Back to home</button>
            </div>
        </div>

    )
}
export default Result
