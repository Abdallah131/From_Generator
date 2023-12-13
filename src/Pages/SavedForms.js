import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Delete from "../assets/images/remove.png";
import View from "../assets/images/viewform.png";
import {useNavigate } from "react-router-dom"

export default function SavedForms() {
  const [forms, setForms] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/formsList")
      .then((res) => res.json())
      .then((data) => setForms(data));
  }, []);

  function deleteForm(formId) {
    fetch("/deleteForm", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId: formId,
      }),
    })
      .then((res) => res.text())
      .then(() => {
        console.log("Success");
        setForms(forms.filter((form) => form._id !== formId));
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  }

  function retrieveForm(formId) {
    navigate(`/form/${formId}`);
  }
  
  const formsArray = forms.map((form) => (
    <div className="SavedForm" key={form._id}>
      <p>Title: {form.title}</p>
      <p>Elements: {form.elements.join(", ")}</p>
      <div>
        <img
          src={Delete}
          alt=""
          onClick={() => deleteForm(form._id)}
        />
         <img
          src={View}
          alt=""
          onClick={() => retrieveForm(form._id)}
        />
      </div>
    </div>
  ));

  return (
    <div className="savedForms--container">
      <Header />
      {formsArray}
    </div>
  );
}
