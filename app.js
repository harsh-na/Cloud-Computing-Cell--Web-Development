const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routers/home");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port =process.env.port || 3000;

app.use('/',home)

app.listen(port)

mongoose.connect('mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/mernstacks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true})

    const db =mongoose.connection;

    db.on('error',() =>{console.log(err);})
    db.once('open',() =>{console.log("connected");})

    app.get("/login", function (req, res) {
        res.render("login");
    });
    app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/mainpage", function (req, res) {
    res.render("mainpage");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard", function (req, res) {
    res.render("dashboard");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard2", function (req, res) {
    res.render("dashboard2");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard3", function (req, res) {
    res.render("dashboard3");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard4", function (req, res) {
    res.render("dashboard4");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard5", function (req, res) {
    res.render("dashboard5");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard6", function (req, res) {
    res.render("dashboard6");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard7", function (req, res) {
    res.render("dashboard7");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard8", function (req, res) {
    res.render("dashboard8");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard9", function (req, res) {
    res.render("dashboard9");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/dashboard10", function (req, res) {
    res.render("dashboard10");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));


app.get("/popular", function (req, res) {
    res.render("popular");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

app.get("/about", function (req, res) {
    res.render("about");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));


app.get("/feedback", function (req, res) {
    res.render("feedback");
});
app.use(express.static('views')); 
app.use('/images', express.static('images'));

/*
const DB = 'mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/mernstacks?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));*/