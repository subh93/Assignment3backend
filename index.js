const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const AD = require('./routes/AllData');
const { Console } = require('console');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/v1/api', AD);

mongoose.set('strictQuery', true);
const connectiondone = async() => {
  try {
    const dbconnect = await mongoose.connect(process.env.MONGOPATH,{useNewUrlParser: true})
    console.log(`Connection Establish ${dbconnect.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

connectiondone().then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
  })
})
