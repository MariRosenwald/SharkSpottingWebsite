import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import CookieManager from './CookieManager';
import axios from 'axios';
import './Pages.css';




function AddFileRow(props) {

  const [file, setFile] = useState({
    title: '',
    location: '',
    description: ''
  });
  //const navigate = useNavigate();
  
  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name == "title") {
      setFile({title: value, location: file.location, description: file.description});
    }
    else if (name == "location") {
      setFile({title: file.title, location: value, description: file.description})
    }
    else if (name == "description") {
      setFile({title: file.title, location: file.location, description: value})
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    
    alert(`file: ${file.title}, location: ${file.location}, description: ${file.description}`)
  
    let email = CookieManager.getCookie("email");
    let token = CookieManager.getCookie("token");
  
    try {
      await axios.post('http://localhost:5050/files', 
      {
        title: file.title,
        location: file.location,
        description: file.description
      }, {
        params: { email: email, token: token}
      });
      location.reload();
    } catch(error) {
      if (error.response.data) {
        alert(error.response.data);
      }
    }
    setFile({
      title: '',
      location: '',
      description: ''
    });
  }

  if (props.admin) {
    return (
      <tr>
          <td>
            <input 
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
            />
          </td>
          <td>
          <input 
              name="location"
              placeholder="Location"
              onChange={handleInputChange}
            />
          </td>
          <td>
          <input 
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
            />
          </td>
          <td>
            <button className='inputbuttontables' onClick={handleSubmit}>Add</button>
          </td>
        </tr>
    ); 
  }
}

function FilesTableHeader(props) {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Location</th>
        <th>Description</th>
        <th hidden={!props.admin}></th>
      </tr>
    </thead>
  );
}

function FilesTableBody(props) {
  let rows = props.files.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>
          <a href={row.location}>{row.location}</a>
        </td>
        <td>{row.description}</td>
        <td hidden={!props.admin}>
          <button className='inputbuttontables' onClick={() => props.removeFile(index)} hidden={row.admin}>Remove</button>
        </td>
      </tr>
    );
  });
  return (<tbody>
            {rows}
            <AddFileRow admin={props.admin}> </AddFileRow>
          </tbody>);
}


function FilesTable(props) {
  return (
    <table className="centered-table">
      <FilesTableHeader admin={props.admin}/>
      <FilesTableBody files={props.files} admin={props.admin} removeFile={props.removeFile}/>
    </table>
  );
}

export default FilesTable;
