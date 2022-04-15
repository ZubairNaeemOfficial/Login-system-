
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./server/routes/user');
const cors = require('cors');
const dotenv=require('dotenv') 
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json());
app.use("/", routes);
const port=process.env.PORT;

const server = app.listen(port, "localhost", function () {
  console.log(`Blog App listening at http://localhost:${port}`);
  
});
