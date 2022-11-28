import React from 'react';
import propTypes from 'prop-types';
import './Pages.css';

RequestTableBody.propTypes = {
  requests: propTypes.any
};

RequestTable.propTypes = {
  requests: propTypes.any
};
function RequestTableHeader() {
  return (
    <thead>
      <tr>
        <th>Request</th>
        <th>Description</th>
      </tr>
    </thead>
  );
}

function RequestTableBody(props) {
  const rows = props.requests.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.description}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
function RequestTable(props) {
  return (
    <table className="centered-table">
      <RequestTableHeader />
      <RequestTableBody requests={props.requests} />
    </table>
  );
}

export default RequestTable;
