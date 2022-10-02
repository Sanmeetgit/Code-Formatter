import React from 'react'

export default function ScriptBox(props) {
    const handleLanguageChange = (event) => {
        props.setLanguage(event.target.value);
        console.log("Lang changed");
        console.log(event.target.value);
    }

    return (
        <div className="form-group purple-border mx-3">
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <h3 className="my-2" style={{display: "inline-block"}}>Enter your code here</h3>

                
                <div className="dropdown mt-1" style={{display:"flex", width:"40%"}}>

                    <label htmlFor="selectLang" style={{width:"55%", alignSelf:"center"}}>Select Language : </label>

                    <select name="selectLang" className="form-select" aria-label="Default select example" onChange={handleLanguageChange} defaultValue="cpp" style={{width:"45%"}}>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="cpp">C++</option>
                        <option value="c">C</option>
                        <option value="py">Python</option>
                    </select>
                </div>
            </div>

            <textarea className="form-control" id="exampleFormControlTextarea4" cols="80" rows="20" style={props.textAreaStyle}></textarea>
        </div>
    )
}
