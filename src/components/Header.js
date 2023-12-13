import React from "react";
import Home from '../assets/images/home.png'
import Form from '../assets/images/form.png'
import About from '../assets/images/aboutus.png'
import Saved from '../assets/images/save.png'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header--container">  
        <NavLink to="/">
            <div className="image--container">
                <img src={Home} alt="" />
            </div>
        </NavLink>
        <NavLink to="/">
            <div className="main--elements--container">
                <img src={Form} alt=""/>
                <span>Form Builder</span>
            </div>
        </NavLink>
        <NavLink to="/Saved">
            <div className="main--elements--container">
                <img src={Saved} alt=""/>
                <span>Saved forms</span>
            </div>
        </NavLink>
        <NavLink to="/About">
            <div className="main--elements--container">
                <img src={About} alt=""/>
                <span>About us</span>
            </div>
        </NavLink>
    </div>
  );
}
