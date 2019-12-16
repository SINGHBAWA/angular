const express = require('express');
const app = express();// Run the app by serving the static files
// in the dist directoryapp.use(express.static(__dirname + '/dist'));// Start the app by listening on the default
// Heroku portapp.listen(process.env.PORT || 8080);
