const router = require('./routes/router');
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

app.listen(PORT || process.env.PORT, () => console.log('Server berjalan di port ' + PORT + "..."));