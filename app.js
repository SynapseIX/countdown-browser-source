const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Prof!');
}).listen(port, host, () => {
  console.log('Server is now running...');
});
