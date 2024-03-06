const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/overview') { 
        res.end('This is OVERVIEW')
    } else if(pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(data)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Error on loading page.'
        });
        res.end('Page not found.')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000...')
}) 