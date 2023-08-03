import styles from "./CTAButton.module.css";

const CTAButton = (props) => {

  return (
    <div className={styles.wrapper} onClick={props.onIncrement}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 12H7" stroke="white" strokeLinecap="round"/>
        <path d="M12 17V7" stroke="white" strokeLinecap="round"/>
      </svg>
    </div>
  );
  
};

export default CTAButton;
