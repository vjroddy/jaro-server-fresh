const express = require('express');
const router = express.Router();
const { getAllMovies } = require('../controllers/movieController');

router.get('/movies', getAllMovies);
module.exports = router;
