const express = require('express');
const cors = require('cors');
const movies = require('./routes/movies');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/movies', movies);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
