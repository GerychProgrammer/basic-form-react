import React from "react";
import {useState} from "react";

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "", 
    email: "",
  });

  const [submited, setSubmit] = useState(false);
  
  const [valid, setValid] = useState(false);

  function handleSubmit (event) {
    event.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }

    setSubmit(true);
  }

  function changeFirstName (event) {
    setValues({...values, firstName: event.target.value})
  }

  function changeLastName (event) {
    setValues({...values, lastName: event.target.value})
  }

  function changeEmail (event) {
    setValues({...values, email: event.target.value})
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

        {submited && valid ? <div className="success-message">Your form complited!</div> : null} 

        <input onChange={changeFirstName} value={values.firstName} className="form-field" placeholder="First Name" type="text" />

        {submited && !values.firstName ? <span>Please enter the first name!</span> : null} 

        <input onChange={changeLastName} value={values.lastName} className="form-field" placeholder="Last Name" type="text" />

        {submited && !values.lastName ? <span>Please enter the last name!</span> : null} 

        <input onChange={changeEmail} value={values.email} className="form-field" placeholder="Email" type="text" />

        {submited && !values.email ? <span>Please enter the email!</span> : null} 

        <button type="submit" className="form-field">Register</button>

      </form>
    </div>
  );
}

export default App;
