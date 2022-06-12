import React, { useState, useEffect } from "react";
import "../../styles/GetStartedPage/AdminRegisterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import CloseIcon from "@mui/icons-material/Close";
import { SignInRegisterButton } from "../../components/buttons.js";
import {
  adminRegisterAction,
  adminRegisterClean,
} from "../../actions/adminActions";

function AdminRegisterPage({ setAdminLogin, adminError }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const closeLogin = () => {
    dispatch(adminRegisterClean());
    setAdminLogin(false);
  };

  // admin state
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // handlers
  const registerHandler = (e) => {
    e.preventDefault();
    if (company && email && password) {
      console.log("I ran");

      dispatch(adminRegisterAction(company, email, password));
    }
  };

  // useselector
  const { loading, adminRegister, error } = useSelector(
    (state) => state.adminRegisterReducer
  );

  // useeffect
  //   useEffect(() => {
  //     if (adminLogin === "success") {
  //       navigate("/admin");
  //     }
  //   }, [adminLogin, navigate, dispatch]);

  return (
    <div className="home__admin__login">
      <form action="">
        <div className="login__container">
          <div className="title__and__close">
            <div className="admin__login__title">Register</div>
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

          <label htmlFor="admin__company__name" className="admin__login__label">
            Company<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="admin__company__name"
            onChange={(event) => {
              setCompany(event.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="admin__email" className="admin__login__label">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="admin__email"
            onChange={(event) => {
              setEmail(event.target.value);
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
              setPassword(event.target.value);
            }}
            required
          />
          <br />

          <div>
            {!loading && !adminRegister && (
              <SignInRegisterButton
                text="Register"
                onClickHandler={registerHandler}
              ></SignInRegisterButton>
            )}
          </div>
          {loading && <Loader></Loader>}
          {adminRegister && adminRegister.status && (
            <Message>
              Successfully Registered. Use this username to login:{" "}
              {adminRegister.username}
            </Message>
          )}
          {error && <Message variant="danger">{error}</Message>}
        </div>
      </form>
    </div>
  );
}
export default AdminRegisterPage;
