const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App is now listening on port: ', port);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

