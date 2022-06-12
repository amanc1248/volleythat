import React, { useState, useEffect } from "react";
import "../styles/GetStartedPage/AdminRegisterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import CloseIcon from "@mui/icons-material/Close";
import {
  checkEmployeeLoginStatusClean,
  employeeByIdClean,
  employeeFetchUsersClean,
  employeeLoginAction,
  employeeLoginClean,
} from "../actions/employeeActions";
import { SignInRegisterButton } from "./buttons";

function HomeEmployeeLogin({ setAdminLogin, employeeError }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeLogin = () => {
    setAdminLogin(false);
  };

  // states
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // selectors
  const { loading, employeeLogin, error } = useSelector(
    (state) => state.employeeLoginReducer
  );

  // handlers
  const employeeLoginHandler = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(checkEmployeeLoginStatusClean());
      dispatch(employeeFetchUsersClean());
      dispatch(employeeByIdClean());
      dispatch(employeeLoginAction(username, password));
    }
  };

  // useEffect
  useEffect(() => {
    if (employeeLogin === "Success") {
      navigate("/employee");
    }
  }, [employeeLogin, navigate, dispatch]);
  useEffect(() => {
    dispatch(checkEmployeeLoginStatusClean());
    dispatch(employeeFetchUsersClean());
  }, []);

  return (
    <>
      <div className="home__admin__login">
        <form action="">
          <div className="login__container">
            <div className="title__and__close">
              <div className="admin__login__title">Login as employee</div>
              <div className="close__icon">
                <CloseIcon onClick={closeLogin}></CloseIcon>
              </div>
            </div>
            {employeeError && (
              <Message variant="danger">
                {employeeError === "employeeLoginExpired"
                  ? "Session expired. Please login again"
                  : "Please login first"}
              </Message>
            )}
            <div>
              <br />
              <label htmlFor="username" className="admin__login__label">
                Username<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                type="text"
                required
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <br />
              <label htmlFor="password">
                Password
                <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                type="password"
                id="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <br />

            <div>
              <SignInRegisterButton
                text="Login as Employee"
                onClickHandler={employeeLoginHandler}
              ></SignInRegisterButton>
            </div>
            {loading && <Loader></Loader>}
            {error && <Message variant="danger">{error}</Message>}
            {/* {employeeLogin && <Message>{"Login Successful"}</Message>} */}
          </div>
        </form>
      </div>
    </>
  );
}
export default HomeEmployeeLogin;
