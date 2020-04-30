import  {useState, useEffect, useRef} from "react";

function useTypingGame(start_game_time){

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(start_game_time)
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
      setTimeRemaining(start_game_time)
      setText('')
      refTextarea.current.disabled = false
      refTextarea.current.focus()
    }
  
    const endGame = () =>{
      setIsRunning(false);
      setNumWords(countTextWords(text));
    }
  
    useEffect(()=>{
        document.title = "Speed Typing Game";
  
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

    return {text, timeRemaining, isRunning, numWords, refTextarea, handleTextarea, countTextWords, startGame}
}

export default useTypingGame