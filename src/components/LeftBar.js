import React from "react";
import Field from "./Field";
import fieldsData from "../data/fieldsData.js"

export default function LeftBar() {
    
    const fieldsArray = fieldsData.map(field => {
        return(
            <Field
                key = {field.id}
                name = {field.name}
                url = {field.url}
            />
        )
    })
  return (
    <div className="leftbar--container">  
        <div className="leftbar--headers">
            <div className="leftbar--headers--elements" style={{marginRight:"50px"}}>
                <p>Frequently used</p>
            </div>
            <p>|</p>
            <div className="leftbar--headers--elements" style={{marginLeft:"50px"}}>
                <p>More Fields</p>
            </div>
        </div>
        <div className="fields--container">
            {fieldsArray}
        </div>
    </div>
  );
}