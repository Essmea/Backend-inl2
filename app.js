const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(cors());//Middlewear.
app.use(bodyParser.json()); //Middlewear.

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); //Middlewear

const userRoute = require('./routes/user');
app.use('/user', userRoute); //Middlewear


//ROUTES
app.get('/', (req,res) => {
    res.send('Startpage')
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => { console.log('connected to db');
  });

//Listen
app.listen(3000);