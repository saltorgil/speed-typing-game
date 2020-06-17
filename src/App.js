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
        {/* Main container header */}
        <div className='main-container-header'>
          <div className='main-container-header-logo'>
            <img src={logo} alt='logo'></img>
          </div>
          <FontAwesomeIcon
            onClick={handleVolumeOn}
            className='main-container-header-volume'
            icon={volumeOn ? faVolumeUp : faVolumeMute}
            size='lg'
          />
        </div>

        {/* Main container separation */}
        <hr className='main-container-hr' />

        {/* Main container body */}
        <div className='main-container-body'>
          <h1>How fast do you type in only 5 seconds?</h1>
          <h3>
            TRY THIS <span>&#9654; </span>
            {randomQuote}
          </h3>
          <textarea
            className='main-container-body-textarea'
            onChange={handleTextarea}
            value={text}
            disabled={!isRunning}
            ref={refTextarea}
          />
          <h3>Time remaining: {timeRemaining}</h3>
          <button
            className='main-container-body-button sheen'
            onClick={startGame}
            disabled={isRunning}>
            Start
          </button>
          <h1 id='main-container-click' onClick={countTextWords}>
            Word Count: {numWords}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
