var express = require('express');
var mongoose = require('mongoose');
var router = express();
var MongoClient = "mongodb://desafiodb/test";


exports.initializeMongo = function(){
    mongoose.connect(MongoClient);
    console.log('Conectado ao MongoDB' + MongoClient);
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error'));
    db.once('open', function(){
        console.log('Conectado ao MongoDB!');
        
    });
};





