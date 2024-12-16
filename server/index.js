// Imports
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 
const dotenv = require('dotenv');
const serviceProviderRouter = require('./routers/serviceProviderRouter');
dotenv.config();

// Declarations
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(cors({credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());

// Database connection function
connectDB();

// Endpoints
app.use('/api/serviceProvider', serviceProviderRouter);
app.get('/', (req, res) => {
    res.json('api working...');
});


// Initialize server
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});
