const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('TurboAI backend is running!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
