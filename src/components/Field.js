import React from "react";

export default function Field(props) {

  function handleOnDrag(e ,fieldType) {
    e.dataTransfer.setData("fieldType",fieldType)
  }
  return (
    <div className="field--container"
      draggable
      onDragStart={(e) => handleOnDrag(e,props.name)}
    >  
      <img src={props.url} />
      <p style={{userSelect:"none"}}>{props.name}</p>
    </div>
  );
}