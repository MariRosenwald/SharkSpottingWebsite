import React, { useState } from 'react';
import './Pages.css';
import propTypes from 'prop-types';

Form.propTypes = {
  handleSubmit: propTypes.any
};
function Form(props) {
  const [request, setRequest] = useState({
    name: '',
    description: ''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'Description') setRequest({ name: request['name'], description: value });
    else setRequest({ name: value, description: request['description'] });
  }
  function submitForm() {
    console.log(request);
    props.handleSubmit(request);
    setRequest({ name: '', description: '' });
  }
  return (
    <div className="div-form">
      <form className="form">
        <label style={{ paddingLeft: 1.5 + 'em', paddingRight: 0.5 + 'em' }} htmlFor="name">
          Request:
        </label>
        <input
          type="text"
          style={{ width: 13 + 'em' }}
          name="Request"
          id="Request"
          value={request.name}
          onChange={handleChange}
        />
        <br></br>
        <label style={{ paddingRight: 0.5 + 'em', verticalAlign: 'top' }} htmlFor="description">
          Description:
        </label>
        <textarea
          style={{ height: '5' + 'em', textAlign: 'revert-layer' }}
          type="text"
          name="Description"
          id="Description"
          value={request.description}
          onChange={handleChange}
        />
        <br></br>
        <input
          style={{ marginLeft: 6 + 'em', marginTop: 1 + 'em' }}
          type="button"
          value="Submit"
          onClick={submitForm}
        />
      </form>
    </div>
  );
}

export default Form;
