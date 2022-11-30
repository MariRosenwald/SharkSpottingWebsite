import React from 'react';
import './Pages.css';

function AddFileRow(props) {
  if (props.admin) {
    return (
      <tr>
          <td>
            <input 
              name="title"
              placeholder="Title"
            />
          </td>
          <td>
          <input 
              name="location"
              placeholder="Location"
            />
          </td>
          <td>
          <input 
              name="location"
              placeholder="Description"
            />
          </td>
          <td>
            <button>Add</button>
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
          <button onClick={() => props.removeFile(index)} hidden={row.admin}>Remove</button>
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
