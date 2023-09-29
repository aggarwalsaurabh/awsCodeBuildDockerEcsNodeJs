'use strict';

const express = require('express');
const { logger, readLog } = require('./utils/logger');
var fs = require('fs');
// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  
  logger.info(`Request requested at`);
  res.send('Hello World V3');
  //res.send(JSON.stringify(process.env.PATH, null, 2));
});

app.get('/exc', (req, res) => {
  try{
    // file not presenet
    var data = fs.readFileSync('sample.html');
} catch (err){
    console.log(err);
}
  res.send(process.env);
  //res.send(JSON.stringify(process.env.PATH, null, 2));
});

app.listen(PORT, HOST, () => {
  console.log(`Running console on http://${HOST}:${PORT}`);
  logger.info(`Running logger on http://${HOST}:${PORT}`);
});
