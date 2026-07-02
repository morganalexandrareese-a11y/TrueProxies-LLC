# TrueProxies LLC

TrueProxies LLC is a modern, production-ready platform designed to sell premium proxy services. It combines a sleek customer-facing website with a secure backend system, offering both individual users and businesses reliable access to proxies in Canada, USA, and Australia.

## 🚀 Quick Start

### Using Docker
```bash
docker-compose up -d
```

### Manual Setup
```bash
# Backend
cd backend && npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

**Access:**
- Frontend: http://localhost:3000
- API: http://localhost:5000/health

## 📋 Project Structure

```
├── backend/              # Node.js/Express API
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── models/       # MongoDB schemas (User, Proxy, Order)
│   │   ├── routes/       # API endpoints
│   │   └── index.js      # Entry point
│   ├── package.json
│   └── Dockerfile
├── frontend/             # Next.js React app
│   ├── pages/            # Next.js pages (/, /proxies, /support)
│   ├── styles/           # Tailwind CSS
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml    # Docker orchestration
└── README.md
```

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Security**: Helmet, CORS, bcryptjs
- **Payment Reference**: `0117358581`

### Frontend
- **Framework**: Next.js 13
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State**: Zustand

## ✨ Key Features

✅ **User Management**
- Register/Login with JWT authentication
- Secure password hashing (bcryptjs)
- User profiles

✅ **Proxy Management**
- Browse proxies by country (USA, Canada, Australia)
- Filter by protocol (HTTP, HTTPS, SOCKS5)
- Real-time availability
- Expiry date tracking
- Automatic deactivation of expired proxies

✅ **Payment System**
- Payment reference: `0117358581`
- Order management
- Payment status tracking
- Transaction records

✅ **Proxy Lifecycle**
- Load new proxies (batch or single)
- Track expiry dates
- Renew expiring proxies
- Remove expired proxies

✅ **Customer Support**
- **24/7 Telegram Support**: https://t.me/giantDigitalcenter
- Support page with FAQs
- Multiple contact methods

✅ **Responsive Design**
- Mobile-first approach
- Works on all devices
- Modern UI with Tailwind CSS

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register      # Register new user
POST   /api/auth/login         # Login user
```

### Proxies
```
GET    /api/proxies            # Get all active proxies
GET    /api/proxies/:id        # Get specific proxy
POST   /api/proxies            # Add new proxy (admin)
POST   /api/proxies/batch/load # Batch load proxies (admin)
PATCH  /api/proxies/:id/expiry # Renew proxy expiry (admin)
DELETE /api/proxies/cleanup/expired # Remove expired proxies (admin)
```

### Orders
```
POST   /api/orders             # Create order
GET    /api/orders/user/:userId # Get user orders
GET    /api/orders/:id         # Get order details
PATCH  /api/orders/:id/payment # Update payment status
```

### Users
```
GET    /api/users/profile      # Get user profile
```

## 💳 Payment Reference

**Payment Reference Number**: `0117358581`

This reference is:
- Assigned to all orders automatically
- Used for payment reconciliation
- Required for payment support
- Stored in transaction records

## 📞 Customer Support

### Telegram Support
🔗 **[Join TrueProxies Support](https://t.me/giantDigitalcenter)**

- **Available**: 24/7
- **Response Time**: ~1 hour
- **Support For**:
  - Account issues
  - Proxy connection problems
  - Billing inquiries
  - Technical troubleshooting
  - Feature requests

### Other Support Methods
- **Support Portal**: In-app ticket system
- **Email**: support@trueproxies.com

## 🔐 Security

- Password hashing with bcryptjs
- JWT token authentication
- CORS protection
- Helmet security headers
- Environment variable protection
- MongoDB connection security

## 🌍 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trueproxies
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
PAYMENT_REFERENCE=0117358581
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📚 Documentation

- [PAYMENT_INFO.md](./PAYMENT_INFO.md) - Payment and proxy management details
- [SUPPORT.md](./SUPPORT.md) - Customer support information

## 🚢 Deployment

The project is fully containerized and ready for deployment to:
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- Heroku
- DigitalOcean App Platform

## 📝 Next Steps

1. ✅ Initial project structure
2. ✅ Payment integration (`0117358581`)
3. ✅ Proxy expiry management
4. ✅ Customer support (Telegram)
5. 🔄 Stripe payment implementation
6. 🔄 Admin dashboard
7. 🔄 Email verification
8. 🔄 Proxy health monitoring

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Support

For questions or support:
- 💬 [Telegram](https://t.me/giantDigitalcenter)
- 📧 Email: support@trueproxies.com

---

**Payment Reference**: `0117358581` | **Support**: [Telegram 24/7](https://t.me/giantDigitalcenter)