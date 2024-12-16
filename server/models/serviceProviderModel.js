const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        default: null,
        unique: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String, // URL of the profile picture
      },
      services: [
        {
          name: { type: String, required: true }, // E.g., Plumbing, Graphic Design
          description: { type: String, required: true },
          priceRange: {
            min: { type: Number, required: true },
            max: { type: Number, required: true },
          },
        },
      ],
      location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        latitude: { type: Number }, // For map integration
        longitude: { type: Number },
      },
      ratings: {
        totalRating: { type: Number, default: 0 },
        numberOfReviews: { type: Number, default: 0 },
      },
      availability: {
        type: Boolean,
        default: true,
      },
      bio: {
        type: String,
        trim: true, // Brief description about the provider
      },
      skills: [String], // E.g., ['Carpentry', 'Plumbing', 'Electrical repairs']
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
});

const serviceProviderModel = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = serviceProviderModel;
