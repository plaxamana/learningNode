import express from 'express';

const app = express();

app.use( (req, res, next ) => {
    console.log('<h1>HELLO!!!</h1>');
    next();
});

app.get('/', (req, res) => {
    res.send("Hello!!");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/', (req, res) => {
    const user = {
        name: 'John',
        hobby: 'snowboarding'
    }
    res.send(user);
});


app.listen(3000); 