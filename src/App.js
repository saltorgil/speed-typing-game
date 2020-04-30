import React, {useState, useEffect} from "react";
import "./app.css"

function App() {

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(3)
  const [isRunning, setIsRunning] = useState(false)
  const [numWords, setNumWords] = useState(0)

  const handleTextarea = (event) =>{
    setText(event.target.value)
  }

  const countTextWords = (text) => 
    text
      .trim()
      .split(' ')
      .filter(word=>word!=='')
      .length

  const startGame = () => {
    setIsRunning(true)
    setTimeRemaining(3)
    setText('')
  }

  useEffect(()=>{

    if (isRunning && timeRemaining > 0 ){
      setTimeout(()=>{
        setTimeRemaining(prevTime => prevTime -1) 
      },1000)
    }
    else if (timeRemaining === 0) {
      setIsRunning(false);
      setNumWords(countTextWords(text));
      console.log("juego terminado")
    }

  },[timeRemaining, isRunning])


  return(
    <>
      <div className='main-container'>
        <h1>How fast do you type?</h1>
        <textarea 
          onChange={handleTextarea} 
          value={text}
        />
        <h3>Time remaining: {timeRemaining}</h3>
        <button onClick={startGame}>Start</button>
        <h1 onClick={countTextWords}>Word Count: {numWords}</h1>
      </div>
    </>
  )
};

export default App
