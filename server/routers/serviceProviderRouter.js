const express = require("express");
const {
  registerServiceProvider,
  loginServiceProvider,
  getServiceProviderProfileInfo,
  updateServiceProviderName,
  updateServiceProviderEmail,
  updateServiceProviderContact,
  updateServiceProviderGender,
  updateServiceProviderProfileImage,
  fetchAllServiceProviders
} = require("../controllers/serviceProviderController");
const serviceProviderRouter = express.Router();
const upload = require("../middlewares/multer");

// Route for registering a service provider
serviceProviderRouter.post("/register", registerServiceProvider);

// Route to login a service provider
serviceProviderRouter.post("/login", loginServiceProvider);

// Route to get service provider profile info
serviceProviderRouter.get("/profile/:userId", getServiceProviderProfileInfo);

// Individual routes for updating profile fields
serviceProviderRouter.patch(
  "/updateProfile/:userId/name",
  updateServiceProviderName
);
serviceProviderRouter.patch(
  "/updateProfile/:userId/email",
  updateServiceProviderEmail
);
serviceProviderRouter.patch(
  "/updateProfile/:userId/contact",
  updateServiceProviderContact
);
serviceProviderRouter.patch(
  "/updateProfile/:userId/gender",
  updateServiceProviderGender
);
serviceProviderRouter.patch(
  "/updateProfile/:userId/profileImg",
  upload.single("profileImg"),
  updateServiceProviderProfileImage
);
serviceProviderRouter.get(
  '/',
  fetchAllServiceProviders
);

module.exports = serviceProviderRouter;
