import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    // req.query;  // get query
    // req.body;
    // req.headers;
    // req.params;
    res.send('Success!');
});


app.listen(3000); 