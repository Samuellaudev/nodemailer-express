const express = require('express');
const testEmailRoute = require('./testEmailRoute.js');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API is running');
});

app.post('/test-email', testEmailRoute)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})