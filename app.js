const http = require('http');

require('dotenv').config({ debug: true });

let port = process.env.PORT || 3001;

const hostname = '0.0.0.0';
//const twilio = require('twilio');

const accountSid =  process.env.accountSID;
const authToken =  process.env.authToken;
const client = require('twilio')(accountSid, authToken);


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  client.calls
  .create({
    from:'19036238043',
    to:'18586499516',     
    url: 'https://handler.twilio.com/twiml/EHe3b83d9ca8849cd985f0e46150ecc5b7'
  })
  .then(call => console.log(call.sid));
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

