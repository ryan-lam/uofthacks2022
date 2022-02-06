const key = require('./twilioAPI')
const client = require('twilio')(key.accountSid, key.authToken);

client.messages
  .create({
     body: 'Hey Tiseagan',
     from: '+16474903692',
     to: '+16472868186'
   })
  .then(message => console.log(message.sid));
