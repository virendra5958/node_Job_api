const express=require ('express');
const db = require('./db/db');
const router = require ('./routes/jobRoutes')
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.json());

const port =process.env.PORT || 5000;
app.listen(port, ()=> console.log('Server started'))


app.use('/api',router);




