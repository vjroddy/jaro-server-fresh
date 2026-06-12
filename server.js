const express = require('express');
const cors = require('cors');
require('dotenv').config();

const movieRoutes = require('./src/routes/movieRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('JARO Server is live!');
});

app.use('/api', movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
