import Card from "../ui/Card";
import IndividualUser from "./IndividualUser";
import classes from "./UsersList.module.css";

const UsersList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => (
          <IndividualUser key={user.id} id={user.id} name={user.name} age={user.age} onRemove={props.onRemoveUser} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
