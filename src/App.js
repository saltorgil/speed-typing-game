import React, {useState, useEffect, useRef} from "react";
import "./app.css"

function App() {

  const START_GAME_TIME = 5
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(START_GAME_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [numWords, setNumWords] = useState(0)

  const refTextarea = useRef(null);

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
    setTimeRemaining(START_GAME_TIME)
    setText('')
    refTextarea.current.disabled = false
    refTextarea.current.focus()
  }

  const endGame = () =>{
    setIsRunning(false);
    setNumWords(countTextWords(text));
  }

  useEffect(()=>{

    if (isRunning && timeRemaining > 0 ){
      setTimeout(()=>{
        setTimeRemaining(prevTime => prevTime -1) 
      },1000)
    }
    else if (timeRemaining === 0) {
      endGame();
      console.log("juego terminado")
    }
  // eslint-disable-next-line
  },[timeRemaining, isRunning])


  return(
    <div className="main">
      <div className='main-container'>
        <h1 className='main-container-title'>Speed Typing Game</h1>
        <h2>How fast do you type in only 5 seconds?</h2>
        <textarea 
          onChange={handleTextarea} 
          value={text}
          disabled = {!isRunning}
          ref = {refTextarea}
        />
        <h3>Time remaining: {timeRemaining}</h3>
        <button className="sheen"
          onClick={startGame}
          disabled = {isRunning}
        >
            Start
        </button>
        <h1 onClick={countTextWords}>Word Count: {numWords}</h1>
      </div>
    </div>
  )
};

export default App
