import React from "react";
import useTypingGame from "./hooks/useTypingGame"
import "./css/app.css" 
import logo from "./images/logox2.png"
import audio from "./intergalactic.ogg"


function App() {

  const {text, timeRemaining, isRunning, randomQuote, numWords, refTextarea, handleTextarea, countTextWords, startGame} = useTypingGame(5)


  return(

    <div className="main">
      <audio autoPlay loop muted hidden>
        <source src={audio} type="audio/ogg"/>
      </audio>
      <div className='main-container'>
        <div className="main-container-logo"><img src={logo} alt="logo"></img></div>    
        <hr/>

        <h2>How fast do you type in only 5 seconds?</h2>
        <h4>TRY THIS 	<span>&#9654; </span>{randomQuote}</h4>
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
