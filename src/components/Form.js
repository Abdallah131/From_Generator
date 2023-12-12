import React, { useState } from "react";
import Save from "../assets/images/saveblack.png"
import SaveFull from "../assets/images/saveblackfull.png"
import Delete from "../assets/images/remove.png"
import More from "../assets/images/more.png"

export default function Form() {
  const [elements, setElements] = useState([]);
  const [handleSavePicture,sethandleSavePicture] = useState(true)
  const [formData , setFormData] = useState({
    title : "Form",
    fieldsLabels : {
      textTitle : "Label Text",
      passwordTitle : "Label Text",
      emailTitle : "Label Text",
      textareaTitle : "Label Text",
      radioTitle : {
        first : "Text",
        second : "Text",
        third : "Text",
      },
      checkboxTitle : {
        first : "Text",
        second : "Text",
        third : "Text",
        
      },
      dropdownTitle : "Label Text",
      dateTitle : "Label Text"
    }
  })

  function handleDrop(e) {
    const fieldType = (e.dataTransfer && e.dataTransfer.getData("fieldType")) || "";
    setElements(prevElements => [...prevElements, fieldType]);
  }

  function handleFormChange(e) {
  const { dataset, textContent } = e.target;
  const { name } = dataset;
  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      fieldsLabels: {
        ...prevData.fieldsLabels,
        [key]: value,
      },
    }));
  };
  const updateRadio = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      fieldsLabels: {
        ...prevData.fieldsLabels,
        radioTitle: {
          ...prevData.fieldsLabels.radioTitle,
          [key]: value,
        },
      },
    }));
  };
  const updateChecbkox = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      fieldsLabels: {
        ...prevData.fieldsLabels,
        checkboxTitle: {
          ...prevData.fieldsLabels.radioTitle,
          [key]: value,
        },
      },
    }));
  };
  

  switch (name) {
    case "formTitle":
      setFormData((prevData) => ({
        ...prevData,
        title: textContent,
      }));
      break;
    case "textTitle":
      updateFormData("textTitle", textContent);
      break;
    case "passwordTitle":
      updateFormData("passwordTitle", textContent);
      break;
    case "emailTitle":
      updateFormData("emailTitle", textContent);
      break;
    case "textareaTitle":
      updateFormData("textareaTitle", textContent);
      break;
    case "radio1":
      updateRadio("first", textContent);
      break;
    case "radio2":
      updateRadio("second", textContent);
      break;
    case "radio3":
      updateRadio("third", textContent);
      break;
    case "checkbox1":
      updateChecbkox("first", textContent);
      break;
    case "checkbox2":
      updateChecbkox("second", textContent);
      break;
    case "checkbox3":
      updateChecbkox("third", textContent);
      break;
    case "dropdownTitle":
      updateFormData("dropdownTitle", textContent);
      break;
    case "dateTitle":
      updateFormData("dateTitle", textContent);
      break;
    default:
      console.log("Something went wrong");
  }
}

  function renderInput(fieldType) {
    switch (fieldType) {
      case "Text Input":
        return (
          <div className="dropped--field" >
            <p onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="textTitle">{formData.fieldsLabels.textTitle}</p>
            <input type="text" placeholder="PlaceHoder" />
          </div>
        )
      case "Password Input":
        return (
          <div className="dropped--field" >
            <p onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="passwordTitle">{formData.fieldsLabels.passwordTitle}</p>
            <input type="password" placeholder="PlaceHoder"/>
          </div>
        )
      case "Email Input":
        return (
          <div className="dropped--field" >
            <p onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="emailTitle">{formData.fieldsLabels.emailTitle}</p>
            <input type="email" placeholder="PlaceHoder" />
          </div>
        )
      case "Textarea":
        return (
          <div className="dropped--field" style={{height:"100%"}}>
            <p onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="textareaTitle">{formData.fieldsLabels.textareaTitle}</p>
            <textarea placeholder="PlaceHoder"/>
          </div>
        )
      case "Radio Buttons":
        return (
          <div className="dropped--field" style={{height:"100%"}} > 
            <div className="radioInputs">
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="radio1">{formData.fieldsLabels.radioTitle.first}</label>
              <input type="radio" />
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="radio2">{formData.fieldsLabels.radioTitle.second}</label>
              <input type="radio" />
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="radio3">{formData.fieldsLabels.radioTitle.third}</label>
              <input type="radio" />
            </div>
          </div>
        )
      case "Checkboxes":
        return (
          <div className="dropped--field" style={{height:"100%"}} >
            <div className="radioInputs">
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="checkbox1">{formData.fieldsLabels.checkboxTitle.first}</label>
              <input type="checkbox" />
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="checkbox2">{formData.fieldsLabels.checkboxTitle.second}</label>
              <input type="checkbox" />
              <label onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="checkbox3">{formData.fieldsLabels.checkboxTitle.third}</label>
              <input type="checkbox" />
            </div>
          </div>
        )
      case "Dropdown Menu":
        return (
          <div className="dropped--field" >
          <p onBlur={handleFormChange} suppressContentEditableWarning contentEditable="true" data-name="dropdownTitle">{formData.fieldsLabels.dropdownTitle}</p>
          <select className="select--container">
            <option value="rigatoni">Rigatoni</option>
          </select>
          </div>
        );
      case "Date Input":
        return (
          <div className="dropped--field" >
            <p onBlur={handleFormChange} suppressContentEditableWarning  contentEditable="true" data-name="dateTitle">{formData.fieldsLabels.dateTitle}</p>
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

  function SaveForm() {
    sethandleSavePicture(prev => !prev);
    console.log("Saved Form Data:", formData);
  }

  function deleteFormItem(index) {
    const updatedElements = [...elements];
    updatedElements.splice(index, 1);
    setElements(updatedElements);
  }
  
  const [stylesMenuVisible, setStylesMenuVisible] = useState(false);
  const [stylesMenuContent, setStylesMenuContent] = useState(null);

  function openMenu(element) {
    setStylesMenuVisible(true);
    switch (element) {
      case "Text Input":
      case "Password Input":
      case "Email Input":
      case "Textarea":
      case "Date Input":
        setStylesMenuContent(
          <div className="menuItems">
            <h1>Styles</h1>
            {/* add styles later on */}
            <div className="items--container">
              <div className="items--styles">
              </div>
              <div className="items--styles">
              </div>
              <div className="items--styles">
              </div>
            </div>
          </div>
        );
        break;
      default:
        setStylesMenuContent(
          <div className="menuItems">
            <p>No styles available for {element}</p>
          </div>
        );
    }
  }
  

  return (
    <div
      className="Form--container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="form--header">
        <div>
        <h1 contentEditable="true" suppressContentEditableWarning onBlur={handleFormChange} data-name="formTitle">{formData.title}</h1>
        </div>
        <img src={handleSavePicture ? Save : SaveFull} alt="aa" onClick={SaveForm} />
      </div>
      {elements.map((element, index) => (
      <div key={index} className="dropped--container">
        <br />
        {renderInput(element)}
        <div>
          <img src={Delete} alt=""onClick={() => deleteFormItem(index)} data-index={index} style={{ marginRight: element === "Submit Button" || element === "Reset Button" ? "40px" : "-130px", marginLeft: element === "Submit Button" || element === "Reset Button" ? "40px" : "-130px" }}/>
          <br/>
          <img src={More} alt="" onClick={() => openMenu(element)} style={{ marginRight: element === "Submit Button" || element === "Reset Button" ? "40px" : "-130px", marginLeft: element === "Submit Button" || element === "Reset Button" ? "40px" : "-130px" }}/>  
        </div>
      </div>
      ))}
    {stylesMenuVisible && (
        <div className="stylesMenu">
            {stylesMenuContent}
          <img src={Delete} onClick={() => setStylesMenuVisible(false)} alt="" />
        </div>
      )}
    </div>
  );
}
