const express = require('express');

const router = express.Router();

// Get user orders (placeholder)
router.get('/', async (req, res) => {
  try {
    res.json({ message: 'Orders endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
