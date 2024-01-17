import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  console.log("uppercase clicked")
  let newtext= text.toUpperCase();
  setText(newtext);
  }

  const handleLoClick=()=>{
    console.log("Lowercase clicked")
    let newtext= text.toLowerCase();
    setText(newtext);
    }

    const handleClearClick=()=>{
      console.log("Clear clicked")
      let newtext= '';
      setText(newtext);
      }

  const handleOnChange=()=>{
    console.log("on change") 
    setText(event.target.value)
  }

  const[text, setText]=useState("")
  return (
    <>
    <div className ="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="10" cols="15"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
    </div>

    <div className="container">
      <h1>Your text summary</h1>
      <p>Your text has {text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>

    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
}
