import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button ${props.size ? `button--${props.size}` : ""} ${
          props.inverse ? "button--inverse" : ""
        } ${props.danger ? "button--danger" : ""}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <>
      <button
        className={`button ${props.size ? `button--${props.size}` : ""} ${
          props.inverse ? "button--inverse" : ""
        } ${props.classes ? props.classes : ""}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
