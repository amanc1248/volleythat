import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import FreeEmployee from "./FreeEmployee";
import Loader from "../../components/Loader";
import {
  adminChangeEmployeePasswordActionCleanError,
  adminDeleteEmployeeClean,
  adminEditEmployeeClean,
  adminFetchEmployeeAction,
  checkAdminLoginStatusAction,
} from "../../actions/adminActions";
import ChangeEmployeePassword from "./ChangeEmployeePassword";
import RevealUsernameAndPassword from "./RevealUsernameAndPassword";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import LoaderMain from "../../components/LoaderMain";
import UserLoader from "../../components/UserLoader";
import AddUser from "./AddUser";
import AdminUsers from "./AdminUsers";

function AdminHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addEmployee, setAddEmployee] = useState(false);
  const showAddEmployee = () => {
    setAddEmployee(true);
  };
  const [addUser, setAddUser] = useState(false);
  const showAddUser = () => {
    setAddUser(true);
  };

  const [showEmployees, setShowEmployees] = useState(true);
  const [showUsers, setShowUsers] = useState(false);

  const showFirstTab = () => {
    setShowEmployees(true);
    setShowUsers(false);
  };
  const showSecondTab = () => {
    setShowEmployees(false);
    setShowUsers(true);
  };

  // useSelectors
  const { checkAdminLoginStatus } = useSelector(
    (state) => state.checkAdminLoginStatusReducer
  );
  useEffect(() => {
    dispatch(checkAdminLoginStatusAction());
  }, [dispatch]);

  useEffect(() => {
    if (checkAdminLoginStatus === "notLoggedIn") {
      navigate("/auth/adminNotLoggedIn/false");
    }
  }, [navigate, checkAdminLoginStatus, dispatch]);

  return (
    <>
      {checkAdminLoginStatus !== "success" ? (
        <LoaderMain></LoaderMain>
      ) : (
        <div className="admin__home apply__home__margin">
          {addEmployee && (
            <AddEmployee setAddEmployee={setAddEmployee}></AddEmployee>
          )}
          {addUser && <AddUser setAddUser={setAddUser}></AddUser>}
          <div className="row">
            <div className="add__employee__container col-lg-6 col-md-12 col-sm-12 ">
              <img
                src="https://res.cloudinary.com/proudposhak-com/image/upload/v1653650145/easypizi/person-managing-digital-tasks_tvgeau.png"
                alt="add emplyee"
                className="add__employee__users__image"
              />
              <h3>Add employee and volley user</h3>
              <h6>Employee can send any updates to volley user</h6>
              <button
                className="add__employee__button"
                onClick={showAddEmployee}
              >
                Add Employee
              </button>
              <button className="add__employee__button" onClick={showAddUser}>
                Add volley user
              </button>
            </div>
            <div className="users__container col-lg-6 col-md-12 col-sm-12">
              <div className="employee__users__tab">
                <div
                  className={`the__tab ${showEmployees && "active__tab"}`}
                  onClick={showFirstTab}
                >
                  Employees
                </div>
                <div
                  className={`the__tab ${showUsers && "active__tab"}`}
                  onClick={showSecondTab}
                >
                  volley users
                </div>
              </div>
              {showEmployees && <AdminEmployees></AdminEmployees>}
              {showUsers && <AdminUsers></AdminUsers>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminHome;

function AdminEmployees() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // usestates
  const [message, setMessage] = useState();

  // useSelectors
  let { adminEmployees, loading } = useSelector(
    (state) => state.adminFetchEmployeeReducer
  );
  const { addEmployee } = useSelector((state) => state.adminAddEmployeeReducer);
  const { deletedEmployee } = useSelector(
    (state) => state.adminDeleteEmployeeReducer
  );
  // useEffects

  useEffect(() => {
    dispatch(adminFetchEmployeeAction());
  }, [dispatch]);

  useEffect(() => {
    if (adminEmployees === "expired") {
      navigate("/auth/adminLoginExpired/false");
    } else if (adminEmployees === "notLoggedIn") {
      navigate("/auth/adminNotLoggedIn/false");
    }
  }, [adminEmployees, navigate, dispatch]);

  useEffect(() => {
    if (addEmployee === "success") {
      dispatch(adminFetchEmployeeAction());
    }

    if (deletedEmployee === "success") {
      dispatch(adminFetchEmployeeAction());
    }
  }, [addEmployee, dispatch, deletedEmployee]);

  return (
    <>
      {message && <Message>{message}</Message>}
      {loading ? (
        <UserLoader></UserLoader>
      ) : adminEmployees === "no employees" ? (
        <h1>No Employees</h1>
      ) : adminEmployees === "expired" ? (
        <h1>expired</h1>
      ) : adminEmployees === undefined ? (
        <h1>undefined</h1>
      ) : adminEmployees === null ? (
        <h1>null</h1>
      ) : adminEmployees === "notLoggedIn" ? (
        <h1>Not logged in</h1>
      ) : (
        <>
          {adminEmployees !== 0 &&
            adminEmployees.map((employee) => {
              return (
                <div key={employee.id}>
                  <AdminSingleEmployee
                    employee={employee}
                  ></AdminSingleEmployee>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}

function AdminSingleEmployee({ employee }) {
  const dispatch = useDispatch();
  const [emp, setEmp] = useState(employee);
  const [message, setMessage] = useState();
  // for edit
  const [editEmployee, setEditEmployee] = useState(false);
  const showEditEmployee = () => {
    dispatch(adminEditEmployeeClean());
    setEditEmployee(true);
  };

  // for change password
  const [changePassword, setChangePassword] = useState(false);
  const showChangePassword = () => {
    dispatch(adminChangeEmployeePasswordActionCleanError());
    setChangePassword(true);
  };

  // for free employee
  const [freeEmployee, setFreeEmployee] = useState(false);
  const showFreeEmployee = () => {
    dispatch(adminDeleteEmployeeClean());
    setFreeEmployee(true);
  };

  // for reveal username & password
  const [revealUPass, setRevealUPass] = useState(false);
  const showRevealUPass = () => {
    setRevealUPass(true);
  };

  // useSelectors
  const { editedEmployee } = useSelector(
    (state) => state.adminEditEmployeeReducer
  );
  const { changedPassword } = useSelector(
    (state) => state.adminChangeEmployeePasswordReducer
  );
  const { deletedEmployee } = useSelector(
    (state) => state.adminDeleteEmployeeReducer
  );
  const { loading: loadingEmployeeById, admineEployeeById } = useSelector(
    (state) => state.adminFetchEmployeeByIdReducer
  );

  // useEffects
  useEffect(() => {
    if (admineEployeeById) {
      if (
        editedEmployee === "success" &&
        admineEployeeById.id === employee.id
      ) {
        setEmp(admineEployeeById);
      }
      if (
        changedPassword === "success" &&
        admineEployeeById.id === employee.id
      ) {
        setEmp(admineEployeeById);
      }
      if (
        deletedEmployee === "success" &&
        admineEployeeById.id === employee.id
      ) {
        setEmp(admineEployeeById);
      }
    }
  }, [
    editedEmployee,
    dispatch,
    admineEployeeById,
    loadingEmployeeById,
    changedPassword,
  ]);

  return (
    <div>
      {editEmployee && (
        <EditEmployee
          setEditEmployee={setEditEmployee}
          employeeId={emp.id}
        ></EditEmployee>
      )}
      {changePassword && (
        <ChangeEmployeePassword
          setChangePassword={setChangePassword}
          employeeId={emp.id}
        ></ChangeEmployeePassword>
      )}
      {freeEmployee && (
        <FreeEmployee
          setFreeEmployee={setFreeEmployee}
          employeeId={emp.id}
        ></FreeEmployee>
      )}
      {revealUPass && (
        <RevealUsernameAndPassword
          setRevealUPass={setRevealUPass}
          employeeId={emp.id}
        ></RevealUsernameAndPassword>
      )}
      {message && <Message>{message}</Message>}
      <div className="admin__employee__container">
        <div className="employee__container">
          <div className="employee_details">
            <div className="employee__details__inner"></div>
            <div className="employee__name__post">
              <div className="employee__name">{emp.name}</div>
              <div className="employee__post">{emp.designation}</div>
            </div>
          </div>
          <div className="">
            <button
              className="edit_employee__button"
              onClick={showEditEmployee}
            >
              Edit Details
            </button>
          </div>
          <div className="">
            <button
              className="edit_employee__button"
              onClick={showChangePassword}
            >
              Change Password
            </button>
          </div>
          <div className="">
            <button className="edit_employee__button" onClick={showRevealUPass}>
              Reveal Credentials
            </button>
          </div>
          <div>
            <button
              className="delete__employee__button"
              onClick={showFreeEmployee}
            >
              Free Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
