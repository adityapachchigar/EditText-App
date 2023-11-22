import React, { useState } from 'react'

const TextForm = (props) => {

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{backgroundColor : props.mode==='dark'?'#28282B':'white',color : props.mode==='dark'?'white':'#28282B'}}>
                <div className="mb-3">
                    <h1>{props.mainHeading}</h1>
                    <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#28282B':'white',color : props.mode==='dark'?'white':'#28282B'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{backgroundColor : props.mode==='dark'?'#28282B':'white',color : props.mode==='dark'?'white':'#28282B'}}>
                <h2>Text Summary</h2>
                <p> {text.length > 0 ? `${text.split(" ").length} words and ${text.length} characters` :"Enter something in the text area to get summary"}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text area to get preview"}</p>
            </div>
        </>
    )
}

export default TextForm