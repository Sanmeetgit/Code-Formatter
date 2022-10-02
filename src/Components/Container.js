import React from 'react'
import ScriptBox from './ScriptBox'
import Buttons from './Buttons'

export default function Container(props) {
  return (
    <div style={props.containerStyle} className="container">
        <ScriptBox textAreaStyle={props.textAreaStyle}/>
        <Buttons buttonsStyle={props.buttonsStyle} />
    </div>
  )
}
