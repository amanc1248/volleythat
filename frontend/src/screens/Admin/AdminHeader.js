import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/screens/Admin.css";
import AdminProfile from "./AdminProfile";
import { adminByIdAction } from "../../actions/adminActions";
function AdminHeader() {
  const dispatch = useDispatch();

  const [adminProfile, setAdminProfile] = useState(false);
  const showAdminProfile = () => {
    setAdminProfile(true);
  };

  // useEffect
  useEffect(() => {
    dispatch(adminByIdAction());
  }, [dispatch]);

  // useselctor
  const { loading, adminById, error } = useSelector(
    (state) => state.adminByIdReducer
  );

  return (
    <div>
      {adminProfile && (
        <AdminProfile setAdminProfile={setAdminProfile}></AdminProfile>
      )}
      <div className="the__adminHome__navbar">
        <div></div>
        <div className="admin__brand__name">
          {adminById && adminById.company}
        </div>
        <div className="admin__logout__button" onClick={showAdminProfile}>
          LogOut
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
