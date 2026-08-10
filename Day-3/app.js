// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write('<h1>Welcome to Node.js!!</h1>')
//     res.write('<p>Your dirst HTTP server is running</p>')
//     res.end()
// })

// server.listen(3000, ()=>{
//     console.log('Server is running at http://localhost:3000')
// })

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1 style='color:navy'>Hello from Node.js!</h1>
        <p>Built with pure Node.js http module.</p>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000, () => console.log('Running on :3000'));