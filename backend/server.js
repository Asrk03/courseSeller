const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
