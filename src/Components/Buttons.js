import React from 'react'

export default function Buttons(props) {
  return (
    <div style={props.buttonsStyle}>
        <button type="button" className="btn btn-primary my-2">Primary</button>
        <button type="button" className="btn btn-secondary my-2">Secondary</button>
        <button type="button" className="btn btn-success my-2">Success</button>
        <button type="button" className="btn btn-danger my-2">Danger</button>
        <button type="button" className="btn btn-warning my-2">Warning</button>
        <button type="button" className="btn btn-info my-2">Info</button>
        <button type="button" className="btn btn-light my-2">Light</button>
        <button type="button" className="btn btn-dark my-2">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
    </div>
  )
}
