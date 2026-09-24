require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const customerRoutes = require('./routes/customers');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/customers', customerRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // app.listen(process.env.PORT || 3000, () => {
    //   console.log(`Server is running on port ${process.env.PORT || 3000}`);
    // })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

module.exports = app;