const mongoose = require('mongoose');

const ProxySchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true,
  },
  port: {
    type: Number,
    required: true,
  },
  protocol: {
    type: String,
    enum: ['http', 'https', 'socks5'],
    default: 'http',
  },
  country: {
    type: String,
    enum: ['USA', 'Canada', 'Australia'],
    required: true,
  },
  speed: {
    type: Number,
    default: 0,
  },
  uptime: {
    type: Number,
    default: 100,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bandwidth: {
    type: String,
    enum: ['unlimited', '10GB', '50GB', '100GB'],
    default: 'unlimited',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Proxy', ProxySchema);
