// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const databaseConfig = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(databaseConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', carRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
