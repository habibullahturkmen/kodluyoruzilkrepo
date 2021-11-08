// Third party modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
// Core modules
const path = require('path');
const Post = require('./models/Post');

// initialize express
const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Template Engine
app.set('view engine', 'ejs');

// Execute Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

// Routes
app.get('/', async (req, res) => {
    const posts = await Post.find({});
    res.render('index', {
        posts:posts
    });
});

app.get('/posts/:id', async (req, res) => {
    const posts = await Post.findById(req.params.id);
    res.render('post', {
        posts:posts,
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add_post', (req, res) => {
    res.render('add_post');
});

app.get('/post', async (req, res) => {
    res.render('post');
});

app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

// edit post route
app.get('/posts/edit_post/:id', async (req, res) => {
    const post = await Post.findOne({_id: req.params.id});
    res.render('edit_post', {
        post:post
    });
});

// save the edited post route
app.put('/posts/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
});

app.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
    console.log(`server started at ${port}`);
});