import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log(`Uppercase was clicked ${text}`);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" , "success");
    }
    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase" , "success");
    }

    const handleClearClick = ()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text" , "success");
    }

    const handlePrintSelectClick = ()=>{
        
        let newText = window.getSelection().toString();
        setText(newText);
        props.showAlert("Extracted the selected text" , "success");
    }

    const handleOnClick = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }
    const [text , setText] = useState('');
    
    let chars = text.length;
    let words = text.split(" ").length;
    if(chars === 0)
        words = 0;
    if(text.charAt(text.length -1) === " ")
        words -= 1;


  return (

    <>
    <div className = "container" style={{color :props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} style={{backgroundColor : props.mode === 'light'?'white':'grey', color :props.mode === 'light'?'black':'white'}} onChange = {handleOnClick} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick = {handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2"  onClick = {handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2"  onClick = {handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2"  onClick = {handlePrintSelectClick}>Print Selected text</button>
    </div>
    <div className="container" my-3 style={{color :props.mode === 'light'?'black':'white'}}>
        <h1>Your Text summary</h1>
        <p> {words} words and {chars} characters</p>
        <p> {0.008 * words} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}