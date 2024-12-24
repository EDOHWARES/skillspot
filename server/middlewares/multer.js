const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure where files will be stored
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be saved in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname) || ".png"; // Ensure a fallback
    cb(null, `profile-${uniqueSuffix}${fileExtension}`);
  },
});

// File validation (accept only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, true); // Accept the file
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed."),
      false
    );
  }
};

// Final configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit size to 5MB
  fileFilter: fileFilter,
});

module.exports = upload;
