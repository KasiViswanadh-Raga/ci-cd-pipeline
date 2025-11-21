const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI-CD simple app!');
});

app.get('/health', (req, res) => res.status(200).send('ok'));

app.listen(port, () => console.log(`App running on ${port}`));
