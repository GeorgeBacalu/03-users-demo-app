import { Fragment, useRef, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid input", message: "Please enter a valid name and age (non-empty values)!" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age (> 0)!" });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const resetErrorHandler = () => setError(null);

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={resetErrorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="enteredUsername">Username</label>
          <input ref={nameInputRef} type="text" id="enteredUsername" />
          <label htmlFor="enteredAge">Age (years)</label>
          <input ref={ageInputRef} type="number" id="enteredAge" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
