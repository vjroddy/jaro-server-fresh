const prisma = require('../prisma/prismaClient');

const getAllMovies = async (req, res) => {
    try {
        const movies = await prisma.movie.findMany();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
};

module.exports = { getAllMovies };
