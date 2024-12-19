const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      default: null,
      unique: true,
      sparse: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    servicesAndSkills: {
      type: [String],
      required: true,
      validate: {
        validator: function (val) {
          return val.length > 0; // Ensure the array is not empty
        },
        message: "At least one service or skill is required.",
      },
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    location: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
    },
    bio: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const serviceProviderModel = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);

module.exports = serviceProviderModel;
