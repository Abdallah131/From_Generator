import React, { useState } from "react";
import Save from "../assets/images/saveblack.png"
export default function Form() {
  const [elements, setElements] = useState([]);

  function handleDrop(e) {
    const fieldType = (e.dataTransfer && e.dataTransfer.getData("fieldType")) || "";
    setElements(prevElements => [...prevElements, fieldType]);
  }
  function renderInput(fieldType) {
    switch (fieldType) {
      case "Text Input":
        return (
          <div className="dropped--field" >
            <p>Label Text</p>
            <input type="text" placeholder="PlaceHoder" />
          </div>
        )
      case "Password Input":
        return (
          <div className="dropped--field" >
            <p>Label Text</p>
            <input type="password" placeholder="PlaceHoder"/>
          </div>
        )
      case "Email Input":
        return (
          <div className="dropped--field" >
            <p>Label Text</p>
            <input type="email" placeholder="PlaceHoder" />
          </div>
        )
      case "Textarea":
        return (
          <div className="dropped--field" style={{height:"100%"}}>
            <p>Label Text</p>
            <textarea placeholder="PlaceHoder"/>
          </div>
        )
      case "Radio Buttons":
        return (
          <div className="dropped--field"> 
            <div className="radioInputs">
              <label>Label Text1</label>
              <input type="radio" />
              <label>Label Text2</label>
              <input type="radio" />
              <label>Label Text3</label>
              <input type="radio" />
            </div>
          </div>
        )
      case "Checkboxes":
        return (
          <div className="dropped--field" >
            <div className="radioInputs">
              <label>Label Text1</label>
              <input type="checkbox" />
              <label>Label Text2</label>
              <input type="checkbox" />
              <label>Label Text3</label>
              <input type="checkbox" />
            </div>
          </div>
        )
      case "Dropdown Menu":
        return (
          <div className="dropped--field" >
          <p>Label Text</p>
          <select className="select--container">
            <option value="rigatoni">Rigatoni</option>
          </select>
          </div>
        );
      case "Date Input":
        return (
          <div className="dropped--field" >
            <p>Label Text</p>
            <input type="date" />
          </div>
        )
      case "Submit Button":
        return <input type="submit" value="Submit" name="" className="buttonInputs"/>;
      case "Reset Button":
        return <input type="reset" value="Reset" name="" className="buttonInputs" style={{background:"#d63031"}} />;
      default:
        console.log("something went wrong");
        return null;
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      className="Form--container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="form--header">
        <div>
        <h1>Login Form</h1>
        </div>
        <img src={Save} alt="aa" />
      </div>
      {elements.map((element, index) => (
        <div key={index}>
          <br />
          {renderInput(element)}
        </div>
      ))}
    </div>
  );
}
