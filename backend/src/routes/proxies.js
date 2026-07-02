const express = require('express');
const Proxy = require('../models/Proxy');

const router = express.Router();

// Get all proxies
router.get('/', async (req, res) => {
  try {
    const { country, protocol } = req.query;
    const filter = { isActive: true };

    if (country) filter.country = country;
    if (protocol) filter.protocol = protocol;

    const proxies = await Proxy.find(filter).limit(100);
    res.json(proxies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get proxy by ID
router.get('/:id', async (req, res) => {
  try {
    const proxy = await Proxy.findById(req.params.id);
    if (!proxy) return res.status(404).json({ error: 'Proxy not found' });
    res.json(proxy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
