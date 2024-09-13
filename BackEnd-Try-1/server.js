const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const connectDB = require('./db/db');
require('dotenv').config();

// Require the schema
const schema = require('./models/Schema');

const app = express();

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (optional if you use the default "views" folder)
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// Use routes defined in 'routes.js'
app.use('/', routes);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    }
    catch (error) {
        console.log(error);
    }
}

app.post('/reg', async (req, res) => {
    try {
        const newParticipant = new schema({
            Name: req.body.name,
            Email: req.body.email,
            Contact: req.body.contact,
            Year: req.body.year,
            Event: req.body.event,
            Branch: req.body.Branch,
            Year: req.body.Year,
        })

        const registered = await newParticipant.save();
        res.status(201).render(payment);

    } catch (error) {
        res.status(400).send(error);
    }
})

start();
