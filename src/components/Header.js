import React from "react";
import Home from '../assets/images/home.png'
import Form from '../assets/images/form.png'
import About from '../assets/images/aboutus.png'
import Saved from '../assets/images/save.png'

export default function Header() {
  return (
    <div className="header--container">  
        <div className="image--container">
            <img src={Home} />
        </div>
        <div className="main--elements--container" style={{backgroundColor : "#24a68a"}}>
            <img src={Form}/>
            <span>Form Builder</span>
        </div>
        <div className="main--elements--container">
            <img src={Saved}/>
            <span>Saved forms</span>
        </div>
        <div className="main--elements--container">
            <img src={About}/>
            <span>About us</span>
        </div>
    </div>
  );
}