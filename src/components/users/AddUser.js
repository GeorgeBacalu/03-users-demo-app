import { Fragment, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const [userInput, setUserInput] = useState({ enteredUsername: "", enteredAge: "" });
  const [error, setError] = useState();
  const { enteredUsername, enteredAge } = userInput;

  const userInputChangeHandler = event => {
    const { id, value } = event.target;
    setUserInput(prevState => ({ ...prevState, [id]: value }));
  };

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid input", message: "Please enter a valid name and age (non-empty values)!" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age (> 0)!" });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setUserInput({ enteredUsername: "", enteredAge: "" });
  };

  const resetErrorHandler = () => setError(null);

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={resetErrorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="enteredUsername">Username</label>
          <input type="text" id="enteredUsername" onChange={userInputChangeHandler} value={enteredUsername} />
          <label htmlFor="enteredAge">Age (years)</label>
          <input type="number" id="enteredAge" onChange={userInputChangeHandler} value={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
