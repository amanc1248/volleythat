import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import {
  adminAddEmployeeReducer,
  adminAddUserReducer,
  adminByIdReducer,
  adminChangeEmployeePasswordReducer,
  adminDeleteEmployeeReducer,
  adminEditEmployeeReducer,
  adminFetchEmployeeByIdAllDetailsReducer,
  adminFetchEmployeeByIdReducer,
  adminFetchEmployeeReducer,
  adminFetchUsersReducer,
  adminLoginReducer,
  adminLogoutReducer,
  adminRegisterReducer,
  checkAdminLoginStatusReducer,
} from "./reducers/adminReducers";
import {
  checkEmployeeLoginStatusReducer,
  employeeByIdReducer,
  employeeFetchMostPopularNFTsReducer,
  employeeFetchNewlyMintedNFTsReducer,
  employeeFetchUsersReducer,
  employeeLoginReducer,
  employeeLogoutReducer,
  employeeSendEmailReducer,
  employeeSendPlainEmailReducer,
} from "./reducers/employeeReducers";
const middleware = [thunk];
const reducer = combineReducers({
  adminRegisterReducer: adminRegisterReducer,
  adminLoginReducer: adminLoginReducer,
  adminByIdReducer: adminByIdReducer,
  adminFetchUsersReducer: adminFetchUsersReducer,
  adminAddUserReducer: adminAddUserReducer,
  checkAdminLoginStatusReducer: checkAdminLoginStatusReducer,
  adminLogoutReducer: adminLogoutReducer,
  adminAddEmployeeReducer: adminAddEmployeeReducer,
  adminEditEmployeeReducer: adminEditEmployeeReducer,
  adminFetchEmployeeReducer: adminFetchEmployeeReducer,
  adminFetchEmployeeByIdReducer: adminFetchEmployeeByIdReducer,
  adminFetchEmployeeByIdAllDetailsReducer:
    adminFetchEmployeeByIdAllDetailsReducer,
  adminChangeEmployeePasswordReducer: adminChangeEmployeePasswordReducer,
  adminDeleteEmployeeReducer: adminDeleteEmployeeReducer,
  employeeLoginReducer: employeeLoginReducer,
  checkEmployeeLoginStatusReducer: checkEmployeeLoginStatusReducer,
  employeeLogoutReducer: employeeLogoutReducer,
  employeeFetchUsersReducer: employeeFetchUsersReducer,
  employeeFetchMostPopularNFTsReducer: employeeFetchMostPopularNFTsReducer,
  employeeFetchNewlyMintedNFTsReducer: employeeFetchNewlyMintedNFTsReducer,
  employeeSendEmailReducer: employeeSendEmailReducer,
  employeeSendPlainEmailReducer: employeeSendPlainEmailReducer,
  employeeByIdReducer: employeeByIdReducer,
});
const initialState = {
  adminLoginReducer: { adminLogin: null },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
