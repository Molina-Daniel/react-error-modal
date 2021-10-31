import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersArr, setUsersArr] = useState([]);

  const addNewUserHandler = (uName, uAge) => {
    setUsersArr((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UserList users={usersArr} />
    </div>
  );
}

export default App;
