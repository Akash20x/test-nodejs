const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body "Hello World"
  res.end('Sashaktm Server\n');
});

// Define the port the server will listen on
const port = 80;

// Start the server and have it listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
