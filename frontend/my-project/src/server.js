

const express = require('express');
const app = express();

app.get('/', (request, response) => {
//   response.send('hello world');
});
app.use(express.static('public'));

app.listen(3001, () => {
  console.log('Express intro running on localhost:3001');
});