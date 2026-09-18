const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8080;

const VERSION = '1.0.0';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the DevOps demo app!',
    version: VERSION,
    hostname: os.hostname(),
    servedAt: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Demo app listening on port ${PORT}`);
});