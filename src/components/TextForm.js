import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log(`Uppercase was clicked ${text}`);
        let l = Number(text.split(/\s+/).filter((elem)=>{return elem.length !== 0;}));
        //console.log(l);
        let newText = text.toUpperCase();
        setText(newText);
        if(l !== 0){
            props.showAlert("Converted to Uppercase" , "success");
        }
        else{
            props.showAlert("Please enter some text!" , "warning");
        }
    }
    const handleLoClick = ()=>{
       
        let l = Number(text.split(/\s+/).filter((elem)=>{return elem.length !== 0;}));
        let newText = text.toLowerCase();
        setText(newText);
        if(l !==0){
            props.showAlert("Converted to Lowercase" , "success");
        }
        else{
            props.showAlert("Please enter some text!" , "warning");
        }
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

    const handleBackTicks = ()=>{
        let newText = '`'
        let flag = 1
        for(let i = 0 ; i < text.length ; i++){
            if(text[i] !== '\n' ){
                if(i > 0 && text[i-1] === '\n'){
                    if(!(text[i] === ' ' || text[i] === '\t')){
                        newText += '`'
                        flag = 1
                    }
                }
                if(!(text[i] === ' ' || text[i] === '\t')){
                    if(!flag){
                        newText += '`'
                        flag = 1
                    }
                }
                newText += text[i]
            }
            else{
                if(!(text[i-1] === '\n' || text[i-1] === ' ')){
                    newText += '`'
                }
                newText += '\n'
                flag = 0
            }
        }
        newText += '`'
        setText(newText);

    }
    const [text , setText] = useState('');
    
    // let chars = text.length;
    // let words = text.split(" ").length;
    // if(chars === 0)
    //     words = 0;
    // if(text.charAt(text.length -1) === " ")
    //     words -= 1;


  return (

    <>
    <div className = "container" style={{color :props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} style={{backgroundColor : props.mode === 'light'?'white':'grey', color :props.mode === 'light'?'black':'white'}} onChange = {handleOnClick} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1"  onClick = {handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2 my-1"  onClick = {handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2 my-1"  onClick = {handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2 my-1"  onClick = {handlePrintSelectClick}>Print Selected text</button>
        <button className="btn btn-primary mx-2 my-1"  onClick = {handleBackTicks}>Convert to Code</button>
    </div>
    <div className="container" my-3 style={{color :props.mode === 'light'?'black':'white'}}>
        <h1>Your Text summary</h1>
        <p> {text.split(/\s+/).filter((elem)=>{return elem.length !== 0;}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((elem)=>{return elem.length !== 0;}).length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
