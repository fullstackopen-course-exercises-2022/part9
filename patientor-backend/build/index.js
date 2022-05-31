"use strict";
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3002;
app.get('/ping', (_req, res) => {
    res.send('<h1>Pong</h1>');
});
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
