import  {useState, useEffect, useRef} from "react";

function useTypingGame(start_game_time){

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(start_game_time)
    const [isRunning, setIsRunning] = useState(false)
    const [numWords, setNumWords] = useState(0)

    const [allQuotes, setAllQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState('')


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
      getRandomQuote();
    }

    const getRandomQuote = () => {
      const randNum = Math.floor(Math.random() * allQuotes.length)
      setRandomQuote(allQuotes[randNum])
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


    useEffect(()=>{

      async function randomQuote() {
        const response = await fetch('https://api.quotable.io/quotes?' + new URLSearchParams({
            maxLength: 55,
            skip: Math.floor(Math.random() * 50)
        }))

        const data = await response.json()

        const {results} = data
        const arrayQuotes = results.map(result => result.content + " - " + result.author)
        setAllQuotes(arrayQuotes);
      }
      
      randomQuote()
    },[])

    // eslint-disable-next-line
    useEffect(()=>getRandomQuote(), [allQuotes])


    return {text, timeRemaining, isRunning, randomQuote, numWords, refTextarea, handleTextarea, countTextWords, startGame}
}

export default useTypingGame