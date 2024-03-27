const DataTable = (props) => {

    const{users, currentPage, usersPerPage } = props;
 
    console.log(props.users);

  const indexOfFirstUser = (currentPage - 1) * usersPerPage;
  const indexOfLastUser = currentPage * usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser , indexOfLastUser);

  return (
    <div className="data-table">
      <div className="filter-section">
        <select name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label for="">Entries</label>
        <div className="search-section">
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </span>
        </div>
        <select name="" id="" placeholder="Name">
          <option disabled selected value>
            Name
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <select name="" id="">
          <option disabled selected value>
            Email
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <select name="" id="">
          <option disabled selected value>
            Birthdate
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>MAIDEN NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>USERNAME</th>
            <th>BLOODGROUP</th>
            <th>EYECOLOR</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default DataTable;

