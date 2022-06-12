import React from "react";

import "../styles/components/buttons.css";
const SignInRegisterButton = ({ onClickHandler, text }) => {
  return (
    <button
      className="signIn__register__button"
      type="submit"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
export { SignInRegisterButton };
