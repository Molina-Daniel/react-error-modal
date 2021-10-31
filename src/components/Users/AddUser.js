import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (enteredUserAge < 1) {
      return;
    }
    const userData = {
      name: enteredUserName,
      age: enteredUserAge,
    };
    console.log(userData);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          min="0"
          max="150"
          value={enteredUserAge}
          onChange={userAgeHandler}
        ></input>
        <Button
          buttonType={"submit"}
          onClick={addUserHandler}
          buttonText={"Add User"}
        />
      </form>
    </Card>
  );
};

export default AddUser;
