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


// Controller to update a service provider profile
const updateServiceProviderProfile = async (req, res) => {
  try {
    const {userId} = req.params;
    const {name, email, contact, gender} = req.body
    let profileImg = req.file ? req.file.path : undefined;

    // Validate input
    if (!name && !email && !contact && !gender && !profileImg) {
      return res.status(400).json({
        success: false,
        message: 'No data provided to update.'
      })
    }

    // Find user
    const user = await ServiceProvider.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      })
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (contact) user.contact = contact;
    if (gender) user.gender = gender;
    if (profileImg) user.profileImage = profileImg;

    // Save updated user
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully.',
      user,
    });

  } catch (error) {
    console.error('Error updating profile: ', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
};


module.exports = {
    registerServiceProvider,
    updateServiceProviderProfile,
}

