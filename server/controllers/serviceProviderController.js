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
    password,
    profilePicture,
    services,
    location,
    bio,
    skills,
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
      password: hashedPassword,
      profilePicture,
      services,
      location,
      bio,
      skills,
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

module.exports = {
    registerServiceProvider,
}
