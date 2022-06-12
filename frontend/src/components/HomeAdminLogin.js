import React, { useState, useEffect } from "react";
import "../styles/GetStartedPage/AdminRegisterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import CloseIcon from "@mui/icons-material/Close";
import {
  adminLoginAction,
  adminLoginClean,
  checkAdminLoginStatusClean,
} from "../actions/adminActions";
import { SignInRegisterButton } from "./buttons";
function HomeAdminLogin({ setAdminLogin, adminError }) {
  const navigate = useNavigate();
  const closeLogin = () => {
    setAdminLogin(false);
  };

  // admin state
  const [username, setUsername] = useState();
  const [adminPass, setAdminPass] = useState();

  const saveAdminPass = (value) => {
    setAdminPass(value);
  };
  const saveUsername = (value) => {
    setUsername(value);
  };

  // USE
  const { loading, adminLogin, error } = useSelector(
    (state) => state.adminLoginReducer
  );

  // actions
  const dispatch = useDispatch();
  const adminLoginHandler = (e) => {
    e.preventDefault();
    if (adminPass && username) {
      dispatch(adminLoginAction(adminPass, username));
    }
  };

  // useeffect
  useEffect(() => {
    if (adminLogin === "success") {
      navigate("/admin");
    }
  }, [adminLogin, navigate, dispatch]);

  return (
    <div className="home__admin__login">
      <form action="">
        <div className="login__container">
          <div className="title__and__close">
            <div className="admin__login__title">Login as admin</div>
            <div className="close__icon">
              {!loading && <CloseIcon onClick={closeLogin}></CloseIcon>}
            </div>
          </div>
          {adminError && (
            <Message variant="danger">
              {adminError === "adminLoginExpired"
                ? "Session expired. Please login again"
                : "Please login first"}
            </Message>
          )}
          <br />

          <label htmlFor="admin__login" className="admin__login__label">
            Username<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="admin__login"
            onChange={(event) => {
              saveUsername(event.target.value);
            }}
            required
          />
          <br />

          <label htmlFor="admin__login" className="admin__login__label">
            Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="admin__login"
            onChange={(event) => {
              saveAdminPass(event.target.value);
            }}
            required
          />
          <br />

          <div>
            {!loading && !adminLogin && (
              <SignInRegisterButton
                text="Login as Admin"
                onClickHandler={adminLoginHandler}
              ></SignInRegisterButton>
            )}
          </div>
          {loading && <Loader></Loader>}
          {error && <Message variant="danger">{error}</Message>}
        </div>
      </form>
    </div>
  );
}
export default HomeAdminLogin;
