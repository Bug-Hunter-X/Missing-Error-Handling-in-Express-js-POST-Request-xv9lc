const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling for invalid or missing data
  console.log(user); // Log the user data
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));