// 1. Load environment variables from .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// 2. Middleware
app.use(cors()); // Allows frontend (port 3000) to talk to backend (port 5000)
app.use(express.json()); // Allows parsing of JSON data

// 3. API Routes

// Test Route
app.get('/', (req, res) => {
    res.send("JARO Server is live!");
});

// Create a Movie (Admin)
app.post('/api/movies', async (req, res) => {
    try {
        const { title, category, videoUrl, price } = req.body;
        const newMovie = await prisma.movie.create({
            data: {
                title,
                category,
                videoUrl,
                price: parseFloat(price)
            },
        });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to create movie" });
    }
});

// Get All Movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await prisma.movie.findMany();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});