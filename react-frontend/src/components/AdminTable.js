
import './Pages.css';
//import axios from 'axios';

function UsersTableHeader() {
  return (
    <thead>
      <tr>
        <th>Email</th>
        <th>Password</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

function getAdminStatus(adminBool) {
  if (adminBool) {
    return "Yes"
  }
  return "No"
}

function showPassword(password, adminBool) {
  if (adminBool) {
    return "********"
  }
  return password
}

function UsersTableBody(props) {
  const rows = props.users.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.email}</td>
        <td>{showPassword(row.pwd, row.admin)}</td>
        <td>{getAdminStatus(row.admin)}</td>
        <td>
          <button className='inputbuttontables' onClick={() => props.removeUser(index)} hidden={row.admin}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
function UsersTable(props) {



  return (
    <table className="centered-table">
      <UsersTableHeader />
      <UsersTableBody users={props.users} removeUser={props.removeUser}/>
      
    </table>
  );
}

export default UsersTable;
