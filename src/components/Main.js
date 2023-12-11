import React from "react";
import LeftBar from "./LeftBar";
import Form from "./Form";

export default function Main() {
  return (
    <div className="main--container">  
        <LeftBar />
        <Form />
    </div>
  );
}