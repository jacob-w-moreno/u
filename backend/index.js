// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
const RESPONSE_TEXT = 'Hello from the backend';

app.use(cors()); // Enable CORS for all routes

app.get('/api/message', (req, res) => {
    setTimeout(() => {
        res.send({text: RESPONSE_TEXT, sender: "u"});
    }, 1000); // 1-second delay
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});