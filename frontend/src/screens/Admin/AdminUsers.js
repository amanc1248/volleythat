import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { adminFetchUsersAction } from "../../actions/adminActions";
import LoaderMain from "../../components/LoaderMain";
import UserLoader from "../../components/UserLoader";
function AdminUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states

  // useSelectors
  const { loading, adminUsers } = useSelector(
    (state) => state.adminFetchUsersReducer
  );

  // useEffects
  useEffect(() => {
    dispatch(adminFetchUsersAction());
  }, [dispatch]);

  useEffect(() => {
    if (adminUsers === "notLoggedIn") {
      navigate("/auth/false/notLoggedIn");
    }
  }, [adminUsers, navigate]);

  return (
    <>
      {loading ? (
        <UserLoader></UserLoader>
      ) : adminUsers === "no users" ? (
        <h1>No Users</h1>
      ) : adminUsers === "unAuthorized" ? (
        <h1>unAuthorized</h1>
      ) : adminUsers === undefined ? (
        <h1>undefined</h1>
      ) : adminUsers === null ? (
        <h1>null</h1>
      ) : (
        <>
          {adminUsers.length !== 0 &&
            adminUsers.map((user) => {
              return (
                <div key={user.id}>
                  {" "}
                  <div className="admin__employee__container">
                    <div className="employee__container">
                      <div className="employee_details">
                        <div className="employee__name__post">
                          <div className="employee__name">{user.name}</div>
                        </div>
                      </div>
                      <div className="">
                        <br />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}

export default AdminUsers;
