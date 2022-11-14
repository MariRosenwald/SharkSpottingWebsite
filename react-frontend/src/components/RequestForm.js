import React, { useState } from 'react';
import './Pages.css';

// function Form(props) {
function Form() {
  const [person, setPerson] = useState({
    name: '',
    job: ''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'job') setPerson({ name: person['name'], job: value });
    else setPerson({ name: value, job: person['job'] });
  }
  function submitForm() {
    // props.handleSubmit(person);
    setPerson({ name: '', job: '' });
  }
  return (
    <div className="div-form">
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={person.name} onChange={handleChange} />
        <br></br>
        <label style={{ paddingLeft: 1 + 'em' }} htmlFor="job">
          Job
        </label>
        <input type="text" name="job" id="job" value={person.job} onChange={handleChange} />
        <br></br>
        <input type="button" value="Submit" onClick={submitForm} />
      </form>
    </div>
  );
}

export default Form;
