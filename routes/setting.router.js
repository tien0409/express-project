const express = require("express");

// import controllers 
const controllers = require("../controllers/setting");

// initial router
const router = express.Router();

router.route("/change_password")
  .get(controllers.getChangePassword)
  .post(controllers.postChangePassword)

router.route("/information")
  .get(controllers.getInformation)

module.exports = router;