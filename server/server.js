const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 3600;
app.listen(port, (err) => console.log(err || `listening on port ${port } 😎😊`));