import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
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
      <h1>statistics</h1>
      <div>
        <div>good: {good}</div>
        <div>neutral: {neutral}</div>
        <div>bad: {bad}</div>
      </div>
    </>
  )
}

export default App