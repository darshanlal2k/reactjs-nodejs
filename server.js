console.log("darshan lal");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.json);

app.post('/api', (request, response) => {
    const formData = req.body;
    // Process the received data
    console.log(formData);
    response.status(200).send('Data received');
    response.send("from server");
})

const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'employee',
    port: 5432,
});
client.connect(function (err) {
    err ? console.log("Database not connected") : console.log("Database connected");
});



app.listen(5000, (error) => {
    error ? console.log("port error") : console.log("port started at 5000");
});