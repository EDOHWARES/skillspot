const express = require("express");
const {
  registerServiceProvider,
  updateServiceProviderProfile,
} = require("../controllers/serviceProviderController");
const serviceProviderRouter = express.Router();
const upload = require("../middlewares/multer");

serviceProviderRouter.post("/register", registerServiceProvider);
serviceProviderRouter.put(
  "/updateProfile/:userId",
  upload.single("profileImg"),
  updateServiceProviderProfile
);

module.exports = serviceProviderRouter;