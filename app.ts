import * as express from 'express';
import * as jsonwebtoken from 'jsonwebtoken';
import * as passportLocal from 'passport-local';
import * as passport from 'passport';
import * as pug from 'pug';
import * as bodyParser from 'body-parser';
import * as path from 'path';

let app = express();

app.set('views', path.join(__dirname ,'views'))
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
