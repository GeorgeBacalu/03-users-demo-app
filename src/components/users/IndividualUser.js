import classes from "./IndividualUser.module.css";

const IndividualUser = props => {
  const removeUserHandler = () => props.onRemove(props.id);

  return (
    <li className={classes.user}>
      <span>
        {props.name} ({props.age} years old)
      </span>
      <div className={classes.actions}>
        <button onClick={removeUserHandler}>Remove User</button>
      </div>
    </li>
  );
};

export default IndividualUser;
