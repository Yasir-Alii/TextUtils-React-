import React, { useState } from "react";

function TextForm(props) {

   const handleUpClick = () =>{
    // console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText)
   }
   const handlerOnChange = (event) =>{
    setText(event.target.value)
    // console.log("On Change ");

   }
   const handleLowClick = () =>{
    // console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText)
   }
  const [text, setText] = useState("");
  return (
    <>
      <h3>{props.heading} </h3>

      <div className="mb-3">
        <textarea className="form-control" value={text}  id="textForm" onChange={handlerOnChange} rows="8 " placeholder="Enter your text here"></textarea>
      </div>
        <button className='btn btn-primary mx-2'  onClick={handleUpClick} id="btnUp"> UpperCase</button>
        <button className='btn btn-warning mx-2'  onClick={handleLowClick} id="btnLow">LowerCase</button>
      <div className="container">
        <h3 my-2>
      Your text summary 
        </h3>
        <p>{text.split(" ").length} words , {text.length} characters</p>
      </div>
      <h3>Preview</h3>
      <p>{text}</p>
    </>
  );
}
export default TextForm;
