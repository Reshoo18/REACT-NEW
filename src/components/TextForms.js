import React,{useState} from 'react'

export default function TextForms(props) {
    
    const handleUpClick=()=>{
   //console.log("upper case is clicked" + text)
   let newText=text.toUpperCase();
   setText(newText)
    }
     const handleLoClick=()=>{
   //console.log("upper case is clicked" + text)
   let newText=text.toLowerCase();
   setText(newText)
    }
    const handleOnChange=(event)=>{
   //console.log("Onchanged")
   setText(event.target.value);
    }

const [text,setText]=useState('Enter the text here');
  return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
       </div>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
