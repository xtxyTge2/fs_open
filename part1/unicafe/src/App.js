import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all; // NaN if all === 0.
  const positive = good / all; // NaN if all === 0.

  return (
    <>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
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