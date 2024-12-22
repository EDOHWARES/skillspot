const bcrypt = require('bcryptjs');
const ServiceProvider = require('../models/serviceProviderModel');
const { validationResult } = require('express-validator');

// Controller to register a new service provider
const registerServiceProvider = async (req, res) => {
  // Extract validation errors from the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    email,
    phone,
    servicesAndSkills,
    yearsOfExperience,
    location,
    bio,
    password,
  } = req.body;

  try {
    // Check if the service provider already exists
    const existingProvider = await ServiceProvider.findOne({ phone });
    if (existingProvider) {
      return res.status(400).json({ message: 'Phone Number is already registered.' });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new service provider
    const newServiceProvider = new ServiceProvider({
      name,
      email,
      phone,
      servicesAndSkills,
      yearsOfExperience,
      location,
      bio,
      password: hashedPassword,
    });

    // Save the provider to the database
    await newServiceProvider.save();

    res.status(201).json({
      message: 'Service provider registered successfully.',
      serviceProvider: {
        id: newServiceProvider._id,
        name: newServiceProvider.name,
        email: newServiceProvider.email,
        phone: newServiceProvider.phone,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the service provider.' });
  }
};

// Controller to update service provider name
const updateServiceProviderName = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      });
    }

    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.name = name;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Name updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating name: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// Controller to update service provider email
const updateServiceProviderEmail = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.email = email;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Email updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating email: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// Controller to update service provider contact
const updateServiceProviderContact = async (req, res) => {
  try {
    const { userId } = req.params;
    const { contact } = req.body;

    if (!contact) {
      return res.status(400).json({
        success: false,
        message: "Contact is required.",
      });
    }

    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.contact = contact;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating contact: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// Controller to update service provider gender
const updateServiceProviderGender = async (req, res) => {
  try {
    const { userId } = req.params;
    const { gender } = req.body;

    if (!gender) {
      return res.status(400).json({
        success: false,
        message: "Gender is required.",
      });
    }

    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.gender = gender;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Gender updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating gender: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// Controller to handle service provider profile image
const updateServiceProviderProfileImage = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileImg = req.file ? req.file.path : undefined;

    if (!profileImg) {
      return res.status(400).json({
        success: false,
        message: "Profile image is required.",
      });
    }

    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.profileImage = profileImg;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile image updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating profile image: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};



module.exports = {
    registerServiceProvider,
    updateServiceProviderName,
    updateServiceProviderEmail,
    updateServiceProviderContact,
    updateServiceProviderGender,
    updateServiceProviderProfileImage,
}

