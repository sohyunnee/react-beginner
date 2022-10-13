import PropTypes from "prop-types";
import styles from "./Button.module.css";
import React from "react";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

{/*Button.PropTypes = {
  text: PropTypes.string.isRequired,
}; */}

export default Button;
