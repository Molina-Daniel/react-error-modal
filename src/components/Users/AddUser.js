import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valir name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valir age (> 0).",
      });
      return;
    }
    props.onAddNewUser(enteredName, enteredAge);
    
    // in order to reset the inputs value we need to manipulate the DOM
    // we usually don't want to do this but for this specific case is ok
    // the other option is to use the useState() way 
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            min="0"
            max="150"
            ref={ageInputRef}
          ></input>
          <Button
            buttonType={"submit"}
            onClick={addUserHandler}
            buttonText={"Add User"}
          />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
