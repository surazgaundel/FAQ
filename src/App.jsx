import { useState } from 'react'
import './index.css'
import Question from './component/Question'
import questions from './component/data'

function App() {
  const [data,setData]=useState(questions)

  return (
    <>
    <h1 className="header">FAQ</h1>
    {data.map(question=>{
      return (<Question key={question.id} {...question} />)
     })}
    </>
  )
}

export default App