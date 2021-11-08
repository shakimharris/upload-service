const express = require("express");
const bodyParser = require("body-parser");
const randomBytes = require("randombytes");


const app = express();
const uploads = {};
app.use(bodyParser.json());

app.get('/uploads', (req, res) => {
  res.send(uploads);
} )

app.post('/uploads', (req, res) => {
const id = randomBytes(4).toString('hex');
const { title } = req.body;

uploads[id] = {
  id, title
}
res.status(201).send(uploads[id]);

app.listen(8080);
