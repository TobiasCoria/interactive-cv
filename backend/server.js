const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Servir frontend
app.use(express.static(path.join(__dirname, '../assets')));

// Health check
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running'
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  console.log('New contact message:', { name, email, message });

  res.json({
    success: true,
    message: 'Message received successfully'
  });
});

// Fallback frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
