// HTTP POST Request Body Data Handling using Node.js Core http module

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/submit' && req.method === 'POST') {
        let body = '';

        // Collect incoming data chunks
        req.on('data', (chunk) => {
            body += chunk;
        });

        // Processing finished
        req.on('end', () => {
            console.log('Received POST Data:', body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully', data: body }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
