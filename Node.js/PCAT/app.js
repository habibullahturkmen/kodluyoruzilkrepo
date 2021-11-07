const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const path = require('path');

const Photo = require('./models/Photos');

const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Template Engine
app.set('view engine', 'ejs');

// Execute Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    const photos = await Photo.find({});
    res.render('index', {
        photos:photos
    });
});

app.get('/photos/:id', async (req, res) => {
    // console.log(req.param.id);
    // res.render('about');
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {
        photo:photo
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/photos', async (req, res) => {
   await Photo.create(req.body);
   res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});