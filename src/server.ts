import express = require('express');

const app = express();

app.get('/message', (req, res) => {
  res.send("Message from backend");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
