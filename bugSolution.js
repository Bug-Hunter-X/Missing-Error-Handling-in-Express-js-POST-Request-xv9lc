const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Check if the request body is empty
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  // Check if required fields are present
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }
  // Validate data types if needed
  try {
    //Further data validation
  } catch (error) {
    return res.status(400).json({ error: 'Invalid user data' });
  }
  console.log(user); 
  res.status(201).json({ message: 'User created', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));