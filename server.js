const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// api routes
app.use('/api/v1', require('./controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});