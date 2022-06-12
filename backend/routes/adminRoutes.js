const express = require("express");
const {
  adminLoginController,
  adminAddEmployeeController,
  adminFetchAllEmployeeController,
  adminEditEmployeeController,
  adminChangeEmployeePasswordController,
  adminDeleteEmployeeController,
  adminLogoutController,
  checkAdminLoginStatus,
  adminEmployeeByIdController,
  adminEmployeeByIdAllDetailsController,
  adminRegisterController,
  adminByIdController,
  adminAddUserController,
  adminFetchUsersController,
} = require("../controllers/adminControllers.js");
const {
  ensureAdminAuthentication,
  smtpVerify,
} = require("../middleware/middleWare.js");
const router = express.Router();

router.route("/adminRegister").post(adminRegisterController);
router.route("/adminLogin").post(adminLoginController);
router.route("/adminLoginStatus").get(checkAdminLoginStatus);
router
  .route("/addEmployee")
  .post(ensureAdminAuthentication, smtpVerify, adminAddEmployeeController);
router
  .route("/addUser")
  .post(ensureAdminAuthentication, adminAddUserController);
router
  .route("/fetchEmployee")
  .get(ensureAdminAuthentication, adminFetchAllEmployeeController);
router
  .route("/fetchUsers")
  .get(ensureAdminAuthentication, adminFetchUsersController);
router.route("/adminById").get(ensureAdminAuthentication, adminByIdController);
router
  .route("/fetchEmployeeById/:id")
  .get(ensureAdminAuthentication, adminEmployeeByIdController);
router
  .route("/fetchEmployeeByIdAllDetails/:id")
  .get(ensureAdminAuthentication, adminEmployeeByIdAllDetailsController);
router
  .route("/editEmployee")
  .put(ensureAdminAuthentication, smtpVerify, adminEditEmployeeController);
router
  .route("/changeEmployeePassword")
  .put(ensureAdminAuthentication, adminChangeEmployeePasswordController);
router
  .route("/deleteEmployee/:employeeId")
  .delete(ensureAdminAuthentication, adminDeleteEmployeeController);
router.route("/logout").get(adminLogoutController);
module.exports = router;
