const http = require('http');

require('dotenv').config({ debug: true });

let port = process.env.PORT || 3001;

//const hostname = '0.0.0.0';
const hostname = 'localhost';
//const twilio = require('twilio');

const accountSid =  process.env.accountSID;
const authToken =  process.env.authToken;
const client = require('twilio')(accountSid, authToken);


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("hello");

  client.calls
  .create({
    from:'18596511022',
    to:'18586499516',     
    url: 'https://handler.twilio.com/twiml/EHf1531d4ab4cc033e4a225b9d4f9a7753'
  })
  .then(call => console.log(call.sid)); 
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

