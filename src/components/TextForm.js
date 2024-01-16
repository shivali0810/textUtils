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

  const handleOnChange=()=>{
    console.log("on change") 
    setText(event.target.value)
  }

  const[text, setText]=useState("enter text here")
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="10" cols="15"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</button>
    </div>
  )
}
