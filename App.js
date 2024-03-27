import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./DataTable";
import axios from "axios";

function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setusersPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
 
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios.get(
      "https://dummyjson.com/users?limit=5&skip=0"
    );

    setUsers(response.data.users);
    setTotalUsers(response.data.total);
  };
  useEffect(() => {
    getUsers();
    
  }, [currentPage, usersPerPage]);


  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalUsers / usersPerPage);
  return (
    <div className="container">
      <header>
        <p>
          Home/
          <a className="link-btn" href="javascript:void(0)">
            Users
          </a>
        </p>
      </header>
      <DataTable users={users} currentPage={currentPage} usersPerPage={usersPerPage}/>
      <div className="pagination">
      <button onClick={() => setCurrentPage(prevPage => prevPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => setCurrentPage(prevPage => prevPage + 1)} disabled={users.length < usersPerPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
