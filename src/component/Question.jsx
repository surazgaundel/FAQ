import {useState} from 'react'

export default function Question({title,info}) {
    const [showAnswer, setShowAnswer]=useState(false)
  return (
    <>
    <div className="container">
        <h2>{title}</h2>
        <button className='button' onClick={()=>setShowAnswer(!showAnswer)}>
            {showAnswer?'➖':'➕'}</button>
        {showAnswer&&<p className='info'>{info}</p>}
    </div>
    </>
  )
}
