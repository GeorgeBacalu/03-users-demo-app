import { useState, Fragment } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => setUsersList(prevState => [...prevState, { name: userName, age: userAge, id: Math.floor(Math.random() * 100000).toString() }]);
  const removeUserHandler = userId => setUsersList(prevState => prevState.filter(user => user.id !== userId));

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onRemoveUser={removeUserHandler} />
    </Fragment>
  );
};

export default App;
