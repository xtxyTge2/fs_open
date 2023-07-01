import { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad}) => {
  const hasFeedback = good !== 0 || neutral !== 0 || bad !== 0;

  const all = good + neutral + bad;
  const average = (good - bad) / all; // NaN if all === 0.
  const positive = good / all; // NaN if all === 0.

  if(!hasFeedback) {
    return (
      <>
        <h1>statistics</h1>
        <p>
          No feedback given
        </p>
      </> 
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><td><StatisticsLine text="good" value={good}></StatisticsLine></td></tr>
          <tr><td><StatisticsLine text="neutral" value={neutral}></StatisticsLine></td></tr>
          <tr><td><StatisticsLine text="bad" value={bad}></StatisticsLine></td></tr>
          <tr><td><StatisticsLine text="all" value={all}></StatisticsLine></td></tr>
          <tr><td><StatisticsLine text="average" value={average}></StatisticsLine></td></tr>
          <tr><td><StatisticsLine text="positive" value={positive + "%"}></StatisticsLine></td></tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  }

  const updateBad = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={updateGood} text='good'></Button>
        <Button handleClick={updateNeutral} text='neutral'></Button>
        <Button handleClick={updateBad} text='bad'></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App