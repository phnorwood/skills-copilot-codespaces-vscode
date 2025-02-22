// Create web server
// 1. Create a web server
// 2. Handle requests and generate responses
// 3. Read from and write to files
// 4. Use a module

// 1. Create web server
// 2. Handle requests and generate responses
// 4. Use a module
const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Create web server
http.createServer((req, res) => {
    // 2. Handle requests and generate responses
    console.log(req.url);

    // 3. Read from and write to files
    if (req.url === '/comments') {
        fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Server error' }));
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Resource not found' }));
    }
}).listen(3000, () => console.log('Server started at http://localhost:3000'));