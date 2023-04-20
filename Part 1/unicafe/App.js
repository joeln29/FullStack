import {useState} from 'react'

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const StatisticLine = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(good - bad) / total}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{good / total} %</td>
        </tr>
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(total + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(total + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(total + 1)
    setBad(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <StatisticLine good={good} neutral={neutral} bad={bad} total={total} />
     </>   
  )
}

export default App