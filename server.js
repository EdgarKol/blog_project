const http = require('http');


const server = http.createServer(() => {
    res.statusCode = 200;
    res.setheader('Content-Type', 'application/json');
    res.end('Hello')
})

server.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})