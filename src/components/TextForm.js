import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleToUpperCase = () => {
    // console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase", "Success");
  }

  const handleToLowerCase = () => {
    // console.log("UpperCase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "Success");
  }
  
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  const handleClear = () => {
    // console.log("clear teaxarea");
    setText("")
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  return (
    <div>  
      <div className="container" style={{color: props.mode1 === "dark"? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            style={{
              backgroundColor : props.mode1 === "dark"? "gray" : "white",
              color : props.mode1 === "dark"? "white" : "black"
            }}
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            id="myBox" 
            rows="8">
          </textarea>
        </div>
        <button 
          className="btn btn-primary mx-1 my-1"
          onClick={handleToUpperCase}>
          Convert to Uppercase
        </button>
        <button 
          className="btn btn-primary mx-1 my-1"
          onClick={handleToLowerCase}>
          Convert to LowerCase
        </button>
        <button 
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}>
          Clear Textarea
        </button>
        <button 
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}>
          Copy Button
        </button>
        <button 
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemove}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode1 === "dark"? "white" : "black"}}>
        <h1>Your taxt summry</h1>
        <p>Your word count is {text.split(/\s+/).filter((element) => {return element.length!==0}).length} and text length is {text.length}</p>
        <p>Read words {0.008 * text.split(" ").length} min</p>
        <h2>preview</h2>
        <p>{text.length === 0 ? "Enter somthing to preview it hear" : text}</p>
      </div>
    </div>
  );
}