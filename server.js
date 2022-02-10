const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const bodyParser = require("body-parser");
const { Console } = require('console');
const mongoose = require('mongoose');
mongoose.promise = global.promise;

require("dotenv").config();

// const dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/hospitalList');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

/*app.post('/add-device', function (req, res) {
console.log(req.body)
    dbConn.then(function(db) {
        db.collection('list').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});*/

//var MongoClient = require('mongodb').MongoClient;


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mdb.");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

require("./public/routes/hospital.route")(app);

/*
MongoClient.connect(process.env.DB_URI, function (err, db) {
    if (err) throw err;
    app.post('/add-device', function (req, res) {

        var dbo = db.db("tele-eye");

        dbo.collection("hospitallist").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("data inserted");
        });
        res.send('Data received:\n' + JSON.stringify(req.body));
    })

});


MongoClient.connect(process.env.DB_URI, function (err, db) {
    if (err) throw err;
    app.get("/getdata", function (req, res) {
        var dbo = db.db("tele-eye");
        var reponse = res;
        dbo.collection("hospitallist").find({}).toArray(function (err, res) {
            if (err) throw err;
            console.log(res);
            reponse.send(JSON.stringify(res));
        });
    })
});
*/


const PORT = process.env.PORT;
app.listen(PORT, function () {
    const message = `App listening on port ${PORT}`;
    console.log(message);
});