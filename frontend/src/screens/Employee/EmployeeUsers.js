import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeFetchNewlyMintedNFTsClean,
  employeeFetchUsersAction,
  employeeFetchUsersClean,
} from "../../actions/employeeActions";
import { useNavigate } from "react-router-dom";
import NewlyMintedNFTs from "./NewlyMintedNFTs";
import LoaderMain from "../../components/LoaderMain";
import UserLoader from "../../components/UserLoader";
import SendEmail from "../../components/SendEmail";
function EmployeeUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states

  // useSelectors
  const { loading, fetchedUsers } = useSelector(
    (state) => state.employeeFetchUsersReducer
  );
  const { employeeById } = useSelector((state) => state.employeeByIdReducer);

  // useEffects
  useEffect(() => {
    if (employeeById) {
      dispatch(employeeFetchUsersAction(employeeById.admin_id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (fetchedUsers === "unAuthorized") {
      navigate("/auth/false/notLoggedIn");
    }
  }, [fetchedUsers, navigate]);

  return (
    <>
      {loading ? (
        <UserLoader></UserLoader>
      ) : fetchedUsers === "no users" ? (
        <h1>No Users</h1>
      ) : fetchedUsers === "unAuthorized" ? (
        <h1>unAuthorized</h1>
      ) : fetchedUsers === undefined ? (
        <h1>undefined</h1>
      ) : fetchedUsers === null ? (
        <h1>null</h1>
      ) : (
        <>
          {fetchedUsers.length !== 0 &&
            fetchedUsers.map((user) => {
              return (
                <div key={user.id}>
                  {" "}
                  <SingleUser user={user}></SingleUser>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}

export default EmployeeUsers;

function SingleUser({ user }) {
  const [sendEmail, setSendEmail] = useState(false);
  const showSendEmail = () => {
    setSendEmail(true);
  };
  return (
    <div className="admin__employee__container">
      {sendEmail && (
        <SendEmail setSendEmail={setSendEmail} user={user}></SendEmail>
      )}
      <div className="employee__container">
        <div className="employee_details">
          <div className="employee__name__post">
            <div className="employee__name">{user.name}</div>
          </div>
        </div>
        <div className="">
          <div>
            <button className="edit_employee__button" onClick={showSendEmail}>
              Send Email
            </button>{" "}
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}
