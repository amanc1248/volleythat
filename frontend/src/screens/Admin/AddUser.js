import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  adminAddEmployeeAction,
  adminAddEmployeeClear,
  adminAddUserAction,
  adminAddUserClean,
} from "../../actions/adminActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";

function AddUser({ setAddUser }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const closeAddEmployee = () => {
    dispatch(adminAddUserClean());
    setAddUser(false);
  };

  // states
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [buttonDisable, setButtonDisable] = useState(false);

  // handlers
  const addUserHandler = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(
        adminAddUserAction({
          name,
          email,
        })
      );
    }
  };

  // use selectors
  const { loading, addUser } = useSelector(
    (state) => state.adminAddUserReducer
  );
  useEffect(() => {
    if (addUser === "notLoggedIn") {
      navigate("/auth/adminNotLoggedIn/false");
    }
    if (addUser === "success") {
      setButtonDisable(true);
    }
  }, [navigate, addUser]);

  return (
    <div>
      <div className="home__admin__login">
        <form action="">
          <div className="employee__add__container">
            <div className="title__and__close">
              <div className="admin__login__title">Add volley user</div>
              <div className="close__icon">
                {!loading && <CloseIcon onClick={closeAddEmployee}></CloseIcon>}
              </div>
            </div>

            <div>
              <label htmlFor="name" className="admin__login__label">
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                type="text"
                id="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                disabled={buttonDisable}
              />
            </div>
            <br />
            <div>
              <label htmlFor="email" className="admin__login__label">
                Email<span style={{ color: "red" }}>*</span>
                <span style={{ color: "grey", fontSize: "10px" }}>
                  Email of your volley user
                </span>
              </label>
              <br />
              <input
                type="email"
                id="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={buttonDisable}
              />
            </div>
            <br />
            {!loading && (
              <div>
                {!addUser && (
                  <>
                    <button
                      className="login__employee__button"
                      type="submit"
                      onClick={addUserHandler}
                      disabled={addUser === "success" && true}
                    >
                      Add volley user
                    </button>
                    <br />
                    {/* <span style={{ color: "grey", fontSize: "10px" }}>
                      We will verify your provided host, email, & email
                      password. Then add it to the employee list. If not
                      correct, you will see a dialog telling credentials are
                      invalid
                    </span> */}
                  </>
                )}
              </div>
            )}

            {loading && <Loader></Loader>}
            {addUser === "success" && (
              <Message>
                {
                  "User Added successfully. You can see user details in the user list"
                }
              </Message>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
