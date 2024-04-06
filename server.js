// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const uri = process.env.DB_URI; // Update with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db();
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        throw error;
    }
}

// Middleware
app.use(express.json());

// Routes
app.get('/cars', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const cars = await db.collection('cars').find().toArray();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add more routes for CRUD operations (e.g., POST, PUT, DELETE)

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
