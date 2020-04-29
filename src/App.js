import React, {useState} from "react";
import "./app.css"

function App() {

  const [text, setText] = useState('')

  const handleTextarea = (event) =>{
    setText(event.target.value)
  }


  return(
    <>
      <div className='main-container'>
        <h1>How fast do you type?</h1>
        <textarea 
          onChange={handleTextarea} 
          value={text}
        />
        <h3>Time remaining:</h3>
        <button>Start</button>
        <h1>Word Count: ?</h1>
      </div>
    </>
  )
};

export default App
