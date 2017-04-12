const express = require('express');
const app = express();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('App is now listening on port: ', port);
});

app.use(express.static('public'));

app.post('/imagesize', upload.single('file'), (req, res) => {
  res.send({ size: req.file.size });


});
