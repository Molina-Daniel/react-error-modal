import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.buttonType || "button"}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
