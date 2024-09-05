const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/cards');

// Create an Express application
const app = express();

// Set up CORS
app.use(cors({
  origin: 'https://fullstact-application.vercel.app', // Replace with the correct origin
  methods: ['GET', 'POST'],
  credentials: true
}));

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const DB = 'mongodb+srv://rajvardhanchaudhary666:Xq2k7HKxHMyr3qK2@cluster0.aywxj.mongodb.net/Help-Center';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
app.use('/api/products', productRoutes);

// Export the app for use in server.js
module.exports = app;
