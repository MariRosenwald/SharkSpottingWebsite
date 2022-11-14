import React from 'react';
import propTypes from 'prop-types';
import './Pages.css';

DataTableBody.propTypes = {
  data: propTypes.any
};

DataTable.propTypes = {
  data: propTypes.any
};
function DataTableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Location</th>
        <th>Description</th>
      </tr>
    </thead>
  );
}

function DataTableBody(props) {
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>
          <a href={row.location}>{row.location}</a>
        </td>
        <td>{row.description}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
function DataTable(props) {
  return (
    <table className="centered-table">
      <DataTableHeader />
      <DataTableBody data={props.data} />
    </table>
  );
}

export default DataTable;
