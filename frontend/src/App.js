import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import AdminHome from "./screens/Admin/AdminHome";
import AdminHeader from "./screens/Admin/AdminHeader";
import EmployeeHome from "./screens/Employee/EmployeeHome";
import EmployeeHeader from "./screens/Employee/EmployeeHeader";
import UserLoader from "./components/UserLoader";
import GetStartedPage from "./screens/GetStartedPage/GetStartedPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/employee"
          element={
            <>
              <EmployeeHeader></EmployeeHeader>
              <EmployeeHome></EmployeeHome>
            </>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <>
              <AdminHeader></AdminHeader>
              <AdminHome></AdminHome>
            </>
          }
        ></Route>
        <Route
          path="/test"
          element={
            <>
              <UserLoader></UserLoader>
            </>
          }
        ></Route>

        <Route
          path="/auth/:adminError/:employeeError"
          element={
            <>
              <GetStartedPage></GetStartedPage>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <GetStartedPage></GetStartedPage>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
