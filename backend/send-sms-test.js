const key = require('./twilioAPI')
const client = require('twilio')(key.accountSid, key.authToken);
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  console.log(twiml)
  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


client.messages
  .create({
     body: 'Hey Tiseagan',
     from: '+16474903692',
     to: '+16479878766'
   })
  .then(message => console.log(message.sid));
