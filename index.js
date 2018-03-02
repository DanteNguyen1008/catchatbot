'use strict'

// Import dependencies and setup http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
// sets server port and logs message on success
app.listen(port, ip)
console.log('webhook Server running on http://%s:%s', ip, port);

/*
// Creates the endpoint for out webhook
app.post('/webhook', (req, res) => {
    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object == 'page') {
        // Interate over each entry - there maybe multiple if batched
        body.entry.forEach(function(entry) {
            // Gets the message. entry.messaging is an array, but will only ever contain on message so we get index = 0
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);
        });

        // Returns a 200 OK response to all requests
        res.status(200).send('EVENT_RECEIVED');
    } else {
        // If not from a page subscription
        res.sendStatus(404);
    }
});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
    // Verify token, should a random string
    let VERIFY_TOKEN = "your_verify_token";

    // parse query params
    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Checks the mode and token sent is correct
        if (mode == 'subscribe' && token == VERIFY_TOKEN) {
            // Response with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            // Token does not match
            res.sendStatus(403);
        }
    } else {
        // If not from a page subscription
        res.sendStatus(404);
    }
})
*/
