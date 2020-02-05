import http from 'http';

const server = http.createServer((req, res) => {
    console.log('method', req.method);
    console.log('url', req.url);

    const user = {
        name: 'John',
        hobby: 'Snowboarding'
    }

    // res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user))
})

server.listen(3000);