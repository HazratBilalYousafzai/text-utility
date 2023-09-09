import React, { useState } from 'react'

export default function TextForm(props) {

    function ConvertToUpCase() {
        if(text.replace(/\s+/g,"").length <1){
            props.showAlert("Text Field is Empty","danger")
        }else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case","success")
        }
        
    }

    function ConvertToLoCase() {
        if(text.replace(/\s+/g,"").length <1){
            props.showAlert("Text Field is Empty","danger")
        }else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case","success")
        }
        
       
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function SpeakText(){
        if(text.replace(/\s+/g,"").length <1){
            props.showAlert("Text Field is Empty","danger")
        }else{
            console.log("speak")
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert("Speaking","success")
        }
       
    }

    let clearText=()=>{
        setText("");
        props.showAlert("Text Clear Successfully","success")
    }


    const copyText =async ()=>{
        if(text.replace(/\s+/g,"").length <1){
            props.showAlert("Text Field is Empty","danger")
        }else{
            let text =  document.getElementById("myBox")
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copy Successfully","success")
        }
        
    }

    const removeExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra spaces Removed","success")
    }
 

    const [text, setText] = useState("");
    return (
        <>
            <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
                <h1>{props.heading}</h1>
                <div className='my-3'>
                    <textarea className={`form-control my-2  text-${props.mode==="dark"?"light":"dark"}` } value={text} style={{backgroundColor:props.mode==="dark"?"black":"white"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={ConvertToUpCase}>Convert to UpperCase</button>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={ConvertToLoCase}>convert to LowerCase </button>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={clearText}>Clear </button>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={SpeakText}>Speak</button>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={copyText}>Copy</button>
                    <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} m-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>

                </div>
            </div>
            <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
                <h2 className='my-3'>Your Text summary</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length}  words and {text.replace(/\s+/g,"").length } Characters</p>
                <h2 className='my-3'>Preview</h2>
                <p>{text.length>0?text:"please enter text in above text area"}</p>
            </div>

        </>
    )
}
