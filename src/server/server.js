const express = require("express")
const Joi = require("joi");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
app.listen(4000)

mongoose.connect('mongodb://127.0.0.1:27017/FormGenerator');


const radioSchema = new mongoose.Schema({
  first :{
    type : String,
    default :"Text",
  },
  second :{
    type : String,
    default :"Text",
  },
  third :{
    type : String,
    default :"Text",
  } 
})

const checkboxSchema = new mongoose.Schema({
  first :{
    type : String,
    default :"Text",
  },
  second :{
    type : String,
    default :"Text",
  },
  third :{
    type : String,
    default :"Text",
  } 
})
const labelsSchema = new mongoose.Schema({
  textTitle : {
    type : String,
    default : "Label Text"
  },
  passwordTitle :{
    type : String,
    default : "Label Text",
  },
  emailTitle : {
    type : String,
    default : "Label Text"
  },
  textareaTitle : {
    type : String,
    default : "Label Text",
  },
  radioTitle : radioSchema,
  checkboxTitle : checkboxSchema,
  dropdownTitle : {
    type : String,
    default : "Label Text",
  },
  dateTitle : {
    type : String,
    default : "Label Text",
  }

})
const formSchema = new mongoose.Schema({
  elements : {
    type : [String]
  },
  title : {
    type : String,
    default : "Form"
  },
  fieldsLabels : labelsSchema
})

const Forms = mongoose.model("Forms", formSchema);

app.post("/addForm", (req, res) => {
  const formElements = req.body.elements;
  const formTitle = req.body.formData.title;
  const formData = req.body.formData.fieldsLabels;

  const newForm = new Forms({
    elements: formElements,
    title: formTitle,
    fieldsLabels : formData
  });
  newForm.save()
    .then(() => {
        res.status(200).json("Form Saved");
    })
    .catch((error) => {
        res.status(400).json("Failed to add form");
    });


});

app.get("/formsList", (req, res) => {
  Forms.find()
      .exec()
      .then((forms) => {
          res.status(200).json(forms);
      })
      .catch((error) => {
          res.status(500).json({ message: "Failed to retrieve form list", error: error.message });
      });
});
  
app.delete("/deleteForm", (req, res) => {
  const formId = req.body.formId;
  console.log(formId);

  Forms.findByIdAndDelete(formId)
    .exec()
    .then((form) => {
      if (form) {
        res.status(200).json({ message: "Form deleted successfully" });
      } else {
        res.status(404).json({ message: "Form not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to delete Form", error: error.message });
    });
});

app.post("/retrieveForm", (req, res) => {
  const formId = req.body.formId;

  Forms.findById(formId)
    .exec()
    .then((form) => {
      if (form) {
        res.status(200).json(form);
      } else {
        res.status(404).json({ message: "Form not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to retrieve specific form", error: error.message });
    });
});