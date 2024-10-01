require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// routes
const adminRoutes = require('./routes/admin');
const announcementRoutes = require('./routes/announcement');
const studentRoutes = require('./routes/student');

// Middleware
app.use(bodyParser.json());
app.use(cors());

//db connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// api endpoints
app.use('/api/admin', adminRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/students', studentRoutes);

const PORT =  5700;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
