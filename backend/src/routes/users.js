const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get user profile (placeholder)
router.get('/profile', async (req, res) => {
  try {
    res.json({ message: 'Protected route - user profile' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
