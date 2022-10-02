import React from 'react'

export default function ScriptBox(props) {
    return (
        <div className="form-group purple-border mx-3">
            <h3 className="my-2">Enter your code here</h3>
            <textarea className="form-control" id="exampleFormControlTextarea4" cols="80" rows="20" style={props.textAreaStyle}></textarea>
        </div>
    )
}
