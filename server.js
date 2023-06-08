const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
