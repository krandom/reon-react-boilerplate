const express = require('express');
const bodyParser = require("body-parser");
const connectDB = require('./config/db')


const app = express();

// Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth/', require('./routes/api/auth'));
app.use('/api/user/', require('./routes/api/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`); });