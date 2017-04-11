const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('App is now listening on port: ', port);
});

app.use(express.static('public'));

app.post('/imagesize', (req, res) => {
  res.send({ size: 2000 });

});
