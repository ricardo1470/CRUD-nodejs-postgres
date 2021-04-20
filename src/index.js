#!/usr/bin/node
/* config server */

/* import express */
const express = require('express');
/* import cors */
var cors = require('cors');
/* import morgan */
const morgan =  require("morgan");
/* import path */
const path = require('path');
/* port assignment */
const port = 9000 || process.env.PORT;

/* eject express */
const app = express();

/* serttings */
app.set('views', path.join(__dirname, 'views'))
/*configured to write html tag, to be rendered with ejs*/
app.engine('html', require('ejs').renderFile);
/*Response Dev Status*/
app.use(morgan('dev'));
app.set('view engine', 'ejs');

/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.use(require('./routes/index'))

/* static files */
app.use(express.static(path.join(__dirname, 'public')));

/* listen server on port */
app.listen(port, function () {
    console.log(`CORS-enabled, web server listening on port: ${port}`)
});
