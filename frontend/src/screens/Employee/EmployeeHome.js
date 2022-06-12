import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import EmployeeUsers from "./EmployeeUsers";
import { useNavigate } from "react-router-dom";
import LoaderMain from "../../components/LoaderMain";
import { checkEmployeeLoginStatusAction } from "../../actions/employeeActions";

function EmployeeHome() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, checkEmployeeLoginStatus, error } = useSelector(
    (state) => state.checkEmployeeLoginStatusReducer
  );

  useEffect(() => {
    dispatch(checkEmployeeLoginStatusAction());
  }, [dispatch]);
  useEffect(() => {
    if (
      checkEmployeeLoginStatus === "unAuthorized" ||
      checkEmployeeLoginStatus === "no employee"
    ) {
      navigate("/auth/false/notLoggedIn");
    }
  }, [checkEmployeeLoginStatus, navigate]);

  return (
    <>
      {loading ? (
        <LoaderMain></LoaderMain>
      ) : (
        <div className="admin__home apply__home__margin">
          <div className="row">
            <div className="add__employee__container col-lg-6 col-md-12 col-sm-12 ">
              <img
                src="https://res.cloudinary.com/proudposhak-com/image/upload/v1653652694/easypizi/person-watching-romantic-tv-show-or-movie_fjze5n.png"
                alt="share nft to users"
                className="employee__home__share__image"
              />
              <h3>Share updates to your volley users</h3>
              <h6>Send updates directly from the app via mail.</h6>
            </div>
            <div className="users__container col-lg-6 col-md-12 col-sm-12">
              <EmployeeUsers> </EmployeeUsers>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeeHome;
