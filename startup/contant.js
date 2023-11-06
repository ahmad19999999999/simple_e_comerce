
const express = require('express');
const path = require('path');

module.exports=function(app){
    app.use(function(request, response, next) {
        console.log('This is global middleware!');
        next();
    });
    app.use(express.urlencoded({ extended:true }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
}) 
   
   
   }