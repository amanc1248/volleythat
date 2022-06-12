import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import {
  employeeSendPlainEmailAction,
  employeeSendPlainEmailClean,
} from "../actions/employeeActions";
function SendEmail({ setSendEmail, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();

  //   useSelectors
  const { loading, sentPlainEmail, error } = useSelector(
    (state) => state.employeeSendPlainEmailReducer
  );
  const { employeeById } = useSelector((state) => state.employeeByIdReducer);
  // handlers
  const closeSendEmail = () => {
    setSendEmail(false);
    dispatch(employeeSendPlainEmailClean());
  };

  const sendEmailHandler = () => {
    const employeeEmail = employeeById.email;
    const host = employeeById.host;
    const password = employeeById.email_password;

    const userEmail = user.email;

    if (subject && email) {
      dispatch(
        employeeSendPlainEmailAction({
          employeeEmail,
          password,
          host,
          subject,
          userEmail,
          email,
        })
      );
    }
  };
  console.log("I am pooooopnen");
  return (
    <div>
      <div>
        <div className="home__admin__login">
          <div className="employee__add__container">
            <div className="title__and__close">
              <div className="admin__login__title">Send Email</div>
              <div className="close__icon">
                {!loading && <CloseIcon onClick={closeSendEmail}></CloseIcon>}
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter Subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <br />
            <textarea
              name="email"
              id="email"
              cols="30"
              rows="10"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="write your email here"
            ></textarea>
            <br />
            <div>
              {!loading && !sentPlainEmail && (
                <button
                  className="login__employee__button"
                  onClick={sendEmailHandler}
                >
                  SendEmail
                </button>
              )}
            </div>
            {loading && <Loader></Loader>}
            {sentPlainEmail === "success" && (
              <Message>"Email Send Successfully"</Message>
            )}
            {error && <Message variant="danger">{error}</Message>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
