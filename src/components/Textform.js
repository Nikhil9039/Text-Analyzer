// This is the State and Handling Events chapter: 07

import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("handle upper case clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };
  // const handleOnChange=()=>{
  //     console.log("onchange clicked")
  // }
  //we are unable to write in the text area for doing this use event lister, react gives this by default
  const handleOnChange = (event) => {
    console.log("onchange clicked");
    setText(event.target.value);
  };
  const handleLoClick = ()=>{
    let newText1=text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to Lower Case", "success")

  }
  const handleClear = ()=>{
    setText("")
    props.showAlert("Text Cleared", "success")

  }
  const handleCopy =()=>{
    //console.log("hello")
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //This is for unselect text
    props.showAlert("Text has been copied to clipboard", "success")

  }

  const handleSpace =()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Space has been removed", "success")

  }

  const [text, setText] = useState("");
  //this means I set a state variable of text name and the value of it is Enter the text here
  //enter the text is the default value of the text and whenever we want to change the value of the text so w will use setText
  //This should only use inside the function and set text will also use inside the function
  //use state return text and setText
  //if I try to directly change the state like
  //text="This is new "
  //so we will get  a error that we can't directly change the value of state
  //correct way : setText("New text");
  //We used usestate hook
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.title}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#03034c':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
          <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx1`} onClick={handleUpClick}>Change to Upper case</button>
          <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleLoClick}>Change to Lower case</button>
          <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleClear} >Clear Text</button>
          <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleSpace} >Remove Extra Space</button>
          <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleCopy} >Copy Text</button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>Your Text Summary</h1>
        {/* <p>
          {text.split(" ").length} words and {text.length} charecters
        </p> */}
         <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
