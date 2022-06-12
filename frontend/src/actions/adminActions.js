import {
  ADMIN_ADD_EMPLOYEE,
  ADMIN_ADD_EMPLOYEE_CLEAR,
  ADMIN_ADD_EMPLOYEE_FAILURE,
  ADMIN_ADD_EMPLOYEE_SUCCESS,
  ADMIN_CHANGE_EMPLOYEE_PASSWORD,
  ADMIN_CHANGE_EMPLOYEE_PASSWORD_CLEAN_ERROR,
  ADMIN_CHANGE_EMPLOYEE_PASSWORD_FAILURE,
  ADMIN_CHANGE_EMPLOYEE_PASSWORD_SUCCESS,
  ADMIN_DELETE_EMPLOYEE,
  ADMIN_DELETE_EMPLOYEE_CLEAN,
  ADMIN_DELETE_EMPLOYEE_FAILURE,
  ADMIN_DELETE_EMPLOYEE_SUCCESS,
  ADMIN_EDIT_EMPLOYEE,
  ADMIN_EDIT_EMPLOYEE_CLEAN,
  ADMIN_EDIT_EMPLOYEE_FAILURE,
  ADMIN_EDIT_EMPLOYEE_SUCCESS,
  ADMIN_FETCH_EMPLOYEES,
  ADMIN_FETCH_EMPLOYEES_CLEAN,
  ADMIN_FETCH_EMPLOYEES_FAILURE,
  ADMIN_FETCH_EMPLOYEES_SUCCESS,
  ADMIN_FETCH_EMPLOYEE_BY_ID,
  ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS,
  ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_CLEAN,
  ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_FAILURE,
  ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_SUCCESS,
  ADMIN_FETCH_EMPLOYEE_BY_ID_CLEAN,
  ADMIN_FETCH_EMPLOYEE_BY_ID_FAILURE,
  ADMIN_FETCH_EMPLOYEE_BY_ID_SUCCESS,
  ADMIN_LOGIN,
  ADMIN_LOGIN_CLEAN,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_LOGOUT_CLEAN,
  ADMIN_LOGOUT_FAILURE,
  AMDIN_LOGOUT_SUCCESS,
  CHECK_ADMIN_LOGIN_STATUS,
  CHECK_ADMIN_LOGIN_STATUS_CLEAN,
  CHECK_ADMIN_LOGIN_STATUS_FAIL,
  CHECK_ADMIN_LOGIN_STATUS_SUCCESS,
  ADMIN_REGISTER,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_CLEAN,
  ADMIN_BY_ID,
  ADMIN_BY_ID_SUCCESS,
  ADMIN_BY_ID_FAILURE,
  ADMIN_BY_ID_CLEAN,
  ADMIN_ADD_USER,
  ADMIN_ADD_USER_SUCCESS,
  ADMIN_ADD_USER_FAILURE,
  ADMIN_ADD_USER_CLEAR,
  ADMIN_FETCH_USER,
  ADMIN_FETCH_USER_SUCCESS,
  ADMIN_FETCH_USER_FAILURE,
  ADMIN_FETCH_USER_CLEAR,
} from "../constants/adminConstants";

const axios = require("axios");

// admin register
export const adminRegisterAction =
  (company, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_REGISTER,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/admin/adminRegister`,
        { company, email, password },
        config
      );
      dispatch({
        type: ADMIN_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// admin register clean
export const adminRegisterClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_REGISTER_CLEAN,
  });
};

// admin login
export const adminLoginAction = (adminPass, username) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/admin/adminLogin`,
      { adminPass, username },
      config
    );
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin login clean
export const adminLoginClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_LOGIN_CLEAN,
  });
};

// admin ADMIN_BY_ID
export const adminByIdAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_BY_ID,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/adminById`, config);
    dispatch({
      type: ADMIN_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin ADMIN_BY_ID_CLEAN
export const adminByIdClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_BY_ID_CLEAN,
  });
};

// check admin login status
export const checkAdminLoginStatusAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_ADMIN_LOGIN_STATUS,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/adminLoginStatus`, config);
    dispatch({
      type: CHECK_ADMIN_LOGIN_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_ADMIN_LOGIN_STATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CHECK_ADMIN_LOGIN_STATUS_CLEAN
export const checkAdminLoginStatusClean = () => async (dispatch) => {
  dispatch({
    type: CHECK_ADMIN_LOGIN_STATUS_CLEAN,
  });
};

// admin ADD EMPLOYEE
export const adminAddEmployeeAction = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADD_EMPLOYEE,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/admin/addEmployee`,
      employee,
      config
    );
    dispatch({
      type: ADMIN_ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ADD_EMPLOYEE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin CHANGE EMPLOYEE PASSWORD CLEAN ERROR
export const adminAddEmployeeClear = () => async (dispatch) => {
  dispatch({
    type: ADMIN_ADD_EMPLOYEE_CLEAR,
  });
};

// admin ADD user
export const adminAddUserAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADD_USER,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/admin/addUser`, user, config);
    dispatch({
      type: ADMIN_ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ADD_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin ADD user clean
export const adminAddUserClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_ADD_USER_CLEAR,
  });
};

// admin FETCH EMPLOYEE
export const adminFetchEmployeeAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FETCH_EMPLOYEES,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/fetchEmployee`, config);
    dispatch({
      type: ADMIN_FETCH_EMPLOYEES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_EMPLOYEES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin CHANGE EMPLOYEE PASSWORD CLEAN ERROR
export const adminFetchEmployeeCleanAction = () => async (dispatch) => {
  dispatch({
    type: ADMIN_FETCH_EMPLOYEES_CLEAN,
  });
};

// admin FETCH EMPLOYEE
export const adminFetchUsersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FETCH_USER,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/fetchUsers`, config);
    dispatch({
      type: ADMIN_FETCH_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin FETCH USERS
export const adminFetchUserCleanAction = () => async (dispatch) => {
  dispatch({
    type: ADMIN_FETCH_USER_CLEAR,
  });
};

// admin EDIT EMPLOYEE
export const adminEditEmployeeAction = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_EDIT_EMPLOYEE,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/admin/editEmployee`,
      employee,
      config
    );
    dispatch({
      type: ADMIN_EDIT_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_EDIT_EMPLOYEE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin EDIT EMPLOYEE
export const adminEditEmployeeClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_EDIT_EMPLOYEE_CLEAN,
  });
};

// admin ADMIN_FETCH_EMPLOYEE_BY_ID
export const adminFetchEmployeeByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FETCH_EMPLOYEE_BY_ID,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/admin/fetchEmployeeById/${id}`,
      config
    );
    dispatch({
      type: ADMIN_FETCH_EMPLOYEE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_EMPLOYEE_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin ADMIN_FETCH_EMPLOYEE_BY_ID_CLEAN
export const adminFetchEmployeeByIdClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_FETCH_EMPLOYEE_BY_ID_CLEAN,
  });
};

// admin CHANGE EMPLOYEE PASSWORD
export const adminChangeEmployeePasswordAction =
  (employeeId, oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_CHANGE_EMPLOYEE_PASSWORD,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/admin/changeEmployeePassword`,
        { employeeId, oldPassword, newPassword },
        config
      );
      dispatch({
        type: ADMIN_CHANGE_EMPLOYEE_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_CHANGE_EMPLOYEE_PASSWORD_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// admin CHANGE EMPLOYEE PASSWORD CLEAN ERROR
export const adminChangeEmployeePasswordActionCleanError =
  () => async (dispatch) => {
    dispatch({
      type: ADMIN_CHANGE_EMPLOYEE_PASSWORD_CLEAN_ERROR,
    });
  };

// admin DELETE EMPLOYEE
export const adminDeleteEmployeeAction = (employeeId) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_DELETE_EMPLOYEE,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `/api/admin/deleteEmployee/${employeeId}`,
      config
    );
    dispatch({
      type: ADMIN_DELETE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_EMPLOYEE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin DELETE EMPLOYEE CLEAN
export const adminDeleteEmployeeClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_DELETE_EMPLOYEE_CLEAN,
  });
};

// admin LOGOUT
export const adminLogoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGOUT,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/logout`, config);
    dispatch({
      type: AMDIN_LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGOUT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// admin LOGOUT CLEAN
export const adminLogoutClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_LOGOUT_CLEAN,
  });
};

// admin ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS
export const adminFetchEmployeeByIdAllDetailsAction =
  (id) => async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/admin/fetchEmployeeByIdAllDetails/${id}`,
        config
      );
      dispatch({
        type: ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// admin ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_CLEAN
export const adminFetchEmployeeByIdAllDetailsClean = () => async (dispatch) => {
  dispatch({
    type: ADMIN_FETCH_EMPLOYEE_BY_ID_ALL_DETAILS_CLEAN,
  });
};
