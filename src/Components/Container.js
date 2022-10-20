import React from 'react'
import { useState } from 'react'

export default function Container(props) {
  const [code, setCode] = useState("");

  const handleLanguageChange = (event) => {
    props.setLanguage(event.target.value);
  }

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  }

  // returns true if string consists of all white-spaces
  const areAllSpaces = (str) => {
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== " ")
        return false;
    }
    return true;
  }

  // returns true if string consists of all tabs
  const areAllTabs = (str) => {
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== "\t")
        return false;
    }
    return true;
  }

  // Remove Comments
  const onRemoveCommentClick = () => {
    let result = "";

    if (props.language === "cpp" || props.language === "c" || props.language === "java") {
      // remove multiline comments
      let temp_res = code;
      while(temp_res.includes("/*")) {
        let startInd = temp_res.indexOf("/*");
        let endInd = temp_res.indexOf("*/");
        let substring = temp_res.substring(startInd, endInd+2);
        temp_res = temp_res.replace(substring, "");
      }
      // remove single line comments
      let split_code = temp_res.split("\n");
      split_code = split_code.map(
        element => {
          if (element.includes("//")) {
            let ind = element.indexOf("//");
            let substring = element.substring(ind);
            element = element.replace(substring, "");
          }
          return element;
        }
      );

      split_code.forEach(element => {
        result += element;
        result += '\n';
      });

    }
    else if (props.language === "py") {
      // remove multiline comments '''....'''
      let temp_res = code;
      while(temp_res.includes("'''")) {
        let startInd = temp_res.indexOf("'''");
        let endInd = temp_res.indexOf("'''", startInd+3);
        let substring = temp_res.substring(startInd, endInd+3);
        temp_res = temp_res.replace(substring, "");
      }
      // remove multiline comments """...."""
      while(temp_res.includes('"""')) {
        let startInd = temp_res.indexOf('"""');
        let endInd = temp_res.indexOf('"""', startInd+3);
        let substring = temp_res.substring(startInd, endInd+3);
        temp_res = temp_res.replace(substring, "");
      }
      // remove single line comments
      let split_code = temp_res.split("\n");
      split_code = split_code.map(
        element => {
          if (element.includes("#")) {
            let ind = element.indexOf("#");
            let substring = element.substring(ind);
            element = element.replace(substring, "");
          }
          return element;
        }
      );
      split_code.forEach(element => {
        result += element;
        result += '\n';
      });
    }

    setCode(result);
  }

  const onRemoveExtraLines = () => {
    let result = "";
    let split_code = code.split("\n");
    split_code.forEach(element => {
      if(element !== "" && !areAllTabs(element) && !areAllSpaces(element)) {
        result += element;
        result += '\n';
      }
    });
    setCode(result);
  }

  return (
    <div className="container" style={props.containerStyle}>
      <div className="scriptbox form-group purple-border mx-3">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <h3 className="my-2" style={{ display: "inline-block" }}>Enter your code here</h3>
          <div className="dropdown mt-1" style={{ display: "flex", width: "40%" }}>

            <label htmlFor="selectLang" style={{ width: "55%", alignSelf: "center" }}>Select Language : </label>

            <select name="selectLang" className="form-select" aria-label="Default select example" onChange={handleLanguageChange} defaultValue="cpp" style={{ width: "45%" }}>
              {/* <option selected>Open this select menu</option> */}
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="py">Python</option>
              <option value="java">Java</option>
            </select>
          </div>
        </div>

        <textarea className="form-control" cols="80" rows="20" style={props.textAreaStyle} value={code} onChange={handleCodeChange}></textarea>
      </div>


      <div className="controls" style={props.buttonsStyle}>
        <button type="button" className="btn btn-primary my-2" onClick={onRemoveCommentClick}>Remove Comments</button>
        <button type="button" className="btn btn-primary my-2" onClick={onRemoveExtraLines}>Remove Extra Lines</button>
        <button type="button" className="btn btn-primary my-2">Apply Indentation</button>
      </div>
    </div>
  )
}
