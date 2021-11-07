const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
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
app.use(fileUpload());
app.use(methodOverride('_method'));

// Routes
app.get('/', async (req, res) => {
    const photos = await Photo.find({}).sort('-dateCreated');
    res.render('index', {
        photos:photos
    });
});

app.get('/photos/:id', async (req, res) => {
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

    const uploadDir = 'public/uploads';

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    let uploadedImage = req.files.image;
    let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;
    
    uploadedImage.mv(uploadPath, async () => {
        await Photo.create({
            ...req.body,
            image: '/uploads/' + uploadedImage.name
        });
        res.redirect('/');
    });
});

app.get('/photos/edit/:id', async (req, res) => {
    const photo = await Photo.findOne({_id: req.params.id});
    res.render('edit', {
        photo:photo
    });
});

app.put('/photos/:id', async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    photo.title = req.body.title;
    photo.description = req.body.description;
    photo.save();
    res.redirect(`/photos/${req.params.id}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});