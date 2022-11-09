import React from 'react';
import propTypes from 'prop-types';
import './Pages.css';

UsersTableBody.propTypes = {
  login: propTypes.any
};

UsersTable.propTypes = {
  login: propTypes.any
};
function UsersTableHeader() {
  return (
    <thead>
      <tr>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
  );
}

function UsersTableBody(props) {
  const rows = props.login.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.email}</td>
        <td>{row.password}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
function UsersTable(props) {
  return (
    <table className="centered-table">
      <UsersTableHeader />
      <UsersTableBody login={props.login} />
    </table>
  );
}

export default UsersTable;
