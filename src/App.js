import React from 'react';
import useTypingGame from './hooks/useTypingGame';
import './css/app.css';
import logo from './images/logox2.png';

import audio from './intergalactic.ogg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

function App() {
  const {
    text,
    timeRemaining,
    isRunning,
    randomQuote,
    numWords,
    refTextarea,
    refAudio,
    handleTextarea,
    countTextWords,
    startGame,
    volumeOn,
    handleVolumeOn,
  } = useTypingGame(5);

  return (
    <div className='main'>
      <audio ref={refAudio} loop autoPlay hidden>
        <source src={audio} type='audio/ogg' />
      </audio>
      <div className='main-container'>
        <div className='main-container-logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <hr />

        <h2>How fast do you type in only 5 seconds?</h2>
        <h4>
          TRY THIS <span>&#9654; </span>
          {randomQuote}
        </h4>
        <textarea
          onChange={handleTextarea}
          value={text}
          disabled={!isRunning}
          ref={refTextarea}
        />
        <h3>Time remaining: {timeRemaining}</h3>
        <button className='sheen' onClick={startGame} disabled={isRunning}>
          Start
        </button>
        <h1 onClick={countTextWords}>Word Count: {numWords}</h1>
        <FontAwesomeIcon
          onClick={handleVolumeOn}
          className='volume-icon'
          icon={volumeOn ? faVolumeUp : faVolumeMute}
          size='lg'
        />
      </div>
    </div>
  );
}

export default App;
