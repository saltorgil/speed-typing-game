import React from "react";
import useTypingGame from "./hooks/useTypingGame"
import "./css/app.css" 

function App() {

  const {text, timeRemaining, isRunning, numWords, refTextarea, handleTextarea, countTextWords, startGame} = useTypingGame(5)


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
