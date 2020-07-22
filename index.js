const express = require('express');
const route = require('./router/route');
const appconfig = require('./config/index');

var app = express();

app.use('/', route);


app.listen(appconfig.port, () => {
    console.log('Server is running at ', appconfig.port);
  });