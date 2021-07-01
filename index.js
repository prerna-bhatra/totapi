require('dotenv').config()
const cors=require('cors')
const express=require('express');
const mongoose=require('mongoose');
//import router
const morgan=require("morgan");
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
const contact = require('./routes/contact');
const app=express();

const connect = mongoose.connect("mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/teamoftrades?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())

app.use('/api',contact);

const port=process.env.PORT || 8000

app.listen(port,()=>
{
	console.log(port);
})