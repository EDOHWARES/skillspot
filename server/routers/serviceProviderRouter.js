const express = require("express");
const {
  registerServiceProvider,
  updateServiceProviderName,
  updateServiceProviderEmail,
  updateServiceProviderContact,
  updateServiceProviderGender,
  updateServiceProviderProfileImage,
} = require("../controllers/serviceProviderController");
const serviceProviderRouter = express.Router();
const upload = require("../middlewares/multer");

// Route for registering a service provider
serviceProviderRouter.post("/register", registerServiceProvider);

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

module.exports = serviceProviderRouter;
