const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/receive', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).send('Ok');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));