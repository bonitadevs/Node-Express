//contains routes for all of the campsite data 

const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')  //drop the app word and path from parameter to chain all the routes together and remove semicolon at the end (unless last method on chain)
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
}); //methods are chained together instead of 5 separate routes

module.exports = campsiteRouter; //export campsiteRouter to use in the server.js