import React from 'react'

export default function Buttons(props) {
  return (
    <div style={props.buttonsStyle}>
        <button type="button" className="btn btn-primary my-2">Remove Comments</button>
        <button type="button" className="btn btn-primary my-2">Apply Indentation</button>
    </div>
  )
}
