const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  console.log('New contact message:', {
    name,
    email,
    message
  });

  res.json({
    success: true,
    message: 'Message received successfully'
  });
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir frontend desde assets
app.use(express.static(path.join(__dirname, '../assets')));

app.listen(PORT, () => console.log);

