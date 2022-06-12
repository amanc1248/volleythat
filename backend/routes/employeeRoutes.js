const express = require("express");
const {
  employeeLoginController,
  employeeFetchUsersController,
  employeeLogoutController,
  employeeMostPopularNFTsController,
  employeeSendEmailController,
  employeeByIdController,
  checkEmployeeLoginStatus,
  employeeSendOnlyEmailController,
} = require("../controllers/employeeControllers");
const { ensureEmployeeAuthentication } = require("../middleware/middleWare");

const router = express.Router();
router.route("/employeeLogin").post(employeeLoginController);
router.route("/employeeLoginStatus").get(checkEmployeeLoginStatus);
router
  .route("/employeeById")
  .get(ensureEmployeeAuthentication, employeeByIdController);
router
  .route("/fetchUsers/:id")
  .get(ensureEmployeeAuthentication, employeeFetchUsersController);
router.route("/logout").get(employeeLogoutController);
router
  .route("/sendEmail")
  .post(ensureEmployeeAuthentication, employeeSendEmailController);

router
  .route("/sendPlainEmail")
  .post(ensureEmployeeAuthentication, employeeSendOnlyEmailController);

module.exports = router;
