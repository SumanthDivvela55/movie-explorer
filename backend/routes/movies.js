const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = '66e699f2'; // Replace with your OMDb API key

router.get('/', async (req, res) => {
    const { searchTerm, searchType } = req.query;

    try {
        const response = await axios.get(`https://www.omdbapi.com/?${searchType}=${searchTerm}&apikey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from OMDb API' });
    }
});

module.exports = router;
