# TrueProxies LLC - Proxy Platform

A modern, production-ready platform for selling premium proxy services in Kenya and worldwide.

## Features

✨ **Modern Frontend**
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Responsive mobile-first design
- Dark theme with gradient accents

🔐 **Authentication**
- User registration and login
- JWT-based token management
- Protected routes and dashboards
- Session persistence

💳 **M-Pesa Payment Integration**
- Kenyan Shilling (KSH) pricing
- Easy M-Pesa checkout flow
- Multiple subscription tiers (100 - 100,000 KSH)
- Payment verification and instant activation

📊 **User Dashboard**
- Account overview with stats
- Proxy credentials by region
- Billing and subscription management
- Settings and profile management
- Transaction history

🌐 **Global Proxies**
- Servers in Canada, USA, and Australia
- Multiple concurrent connections
- Bandwidth allocation per plan
- Instant activation after payment

💬 **Community Support**
- Telegram integration (@giantDigitalcenter)
- Support channel with direct contact
- Community-driven assistance

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js (Node.js)
- **Database**: PostgreSQL
- **Payment**: M-Pesa (Safaricom)
- **Authentication**: JWT
- **APIs**: RESTful API

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/morganalexandrareese-a11y/TrueProxies-LLC.git
cd TrueProxies-LLC

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Configure environment variables
# NEXT_PUBLIC_API_URL=http://localhost:3001
# MPESA_MERCHANT_KEY=your_merchant_key
# MPESA_MERCHANT_CODE=your_merchant_code
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Pricing Structure (KSH)

| Plan | Price | Bandwidth | Connections | Validity |
|------|-------|-----------|-------------|----------|
| Starter | 100 | 5 GB | 1 | 7 days |
| Basic | 500 | 50 GB | 3 | 30 days |
| Professional | 1,000 | 500 GB | 10 | 30 days |
| Business | 5,000 | 5 TB | 50 | 30 days |
| Enterprise | 10,000 | 20 TB | 200 | 30 days |
| Custom | 50K-100K | Custom | Unlimited | Negotiable |

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── login/        # Login page
│   ├── signup/       # Signup page
│   ├── checkout/     # Payment checkout
│   └── dashboard/    # User dashboard
├── components/       # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── api/              # API client functions
│   ├── auth.ts
│   └── subscriptions.ts
├── context/          # React context
│   └── AuthContext.tsx
├── lib/              # Utilities
│   └── apiClient.ts
├── types/            # TypeScript definitions
│   └── index.ts
└── config/           # Configuration
    └── constants.ts
```

## Payment Integration

### M-Pesa Setup
1. M-Pesa Merchant Phone: `0117358581`
2. Payment goes to merchant account
3. Instant confirmation via M-Pesa
4. Automatic proxy activation

## Support

- 🔗 **Telegram**: https://t.me/giantDigitalcenter
- 📧 **Email**: support@trueproxies.com
- 📱 **M-Pesa**: 0117358581

## Next Steps

1. ✅ Frontend setup (completed)
2. ✅ Authentication system (completed)
3. ✅ Payment integration setup (in progress)
4. [ ] Backend API implementation
5. [ ] Database setup (PostgreSQL)
6. [ ] M-Pesa webhook handling
7. [ ] Admin dashboard
8. [ ] Analytics and reporting
9. [ ] Deployment (Vercel + AWS/Render)

## Environment Variables

```bash
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001

# Backend (to be configured)
DATABASE_URL=postgresql://user:password@localhost:5432/trueproxies
JWT_SECRET=your_jwt_secret_key
MPESA_MERCHANT_KEY=your_key
MPESA_MERCHANT_CODE=your_code
MPESA_PASSKEY=your_passkey
```

## Security

- JWT tokens for authentication
- Password hashing with bcrypt
- M-Pesa secure integration
- Environment-based configuration
- HTTPS in production
- CORS security headers

## License

Private - TrueProxies LLC © 2024

## Support & Questions

Join our Telegram community: https://t.me/giantDigitalcenter
