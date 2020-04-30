import React, {useState, useEffect} from "react";
import "./app.css"

function App() {

  const [text, setText] = useState('')
  const [timeRemaining, SetTimeRemaining] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  const handleTextarea = (event) =>{
    setText(event.target.value)
  }

  const startGame = () => {
    setIsRunning(true)
  }

  useEffect(()=>{
      if (isRunning && timeRemaining > 0 ){
        setTimeout(()=>{
          SetTimeRemaining(prevTime => prevTime -1) 
        },1000)
      }
      else if (timeRemaining === 0) {
        setIsRunning(false);
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
        <h1>Word Count:</h1>
      </div>
    </>
  )
};

export default App
