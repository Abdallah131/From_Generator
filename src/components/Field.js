import React from "react";

export default function Field(props) {
  return (
    <div className="field--container">  
     <img src={props.url}  />
      <p>{props.name}</p>
    </div>
  );
}