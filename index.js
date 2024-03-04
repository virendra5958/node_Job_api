const express=require ('express');
const db = require('./db/db');
const router = require ('./routes/jobRoutes')
const bodyParser = require ('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 6000;
app.listen(PORT, ()=> console.log('Server started'));


app.use('/api',router);




