# TrueProxies LLC

TrueProxies LLC is a modern, production-ready platform designed to sell premium proxy services. It combines a sleek customer-facing website with a secure backend system, offering both individual users and businesses reliable access to proxies in Canada, USA, and Australia.

## Project Structure

```
├── backend/              # Node.js/Express API server
│   ├── src/
│   │   ├── config/       # Configuration files (database)
│   │   ├── models/       # MongoDB schemas
│   │   ├── routes/       # API endpoints
│   │   └── index.js      # Entry point
│   ├── package.json
│   └── Dockerfile
├── frontend/             # Next.js React app
│   ├── pages/            # Next.js pages
│   ├── styles/           # Tailwind CSS
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml    # Docker orchestration
└── README.md
```

## Tech Stack

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken)
- **Security**: Helmet, CORS, bcryptjs
- **Payment**: Stripe integration ready

### Frontend
- **Framework**: Next.js 13 (React 18)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Payment**: Stripe JS

## Features

- ✅ User authentication (register/login)
- ✅ Proxy listing and filtering (by country)
- ✅ Responsive design
- ✅ MongoDB integration
- ✅ RESTful API
- ✅ Docker support
- 🔄 Payment processing (Stripe) - In progress
- 🔄 Admin dashboard - In progress
- 🔄 User dashboard - In progress

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (or use Docker)
- Docker & Docker Compose (optional)

### Option 1: Using Docker

```bash
docker-compose up -d
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Option 2: Manual Setup

#### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Proxies
- `GET /api/proxies` - Get all proxies (supports filtering)
- `GET /api/proxies/:id` - Get specific proxy

### Users
- `GET /api/users/profile` - Get user profile (protected)

### Orders
- `GET /api/orders` - Get user orders (protected)

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trueproxies
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Development

### Backend Development
```bash
cd backend
npm run dev      # Start with nodemon
npm test         # Run tests
```

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
```

## Testing

```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

## Deployment

The project is containerized and ready for deployment to:
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- Heroku
- DigitalOcean App Platform

## Security Notes

- Update JWT_SECRET and STRIPE_SECRET_KEY in production
- Enable HTTPS in production
- Set MongoDB authentication credentials
- Use environment variables for sensitive data
- Enable CORS restrictions for frontend domain

## Next Steps

1. ✅ Set up initial project structure
2. 🔄 Implement Stripe payment integration
3. 🔄 Build admin dashboard
4. 🔄 Add email verification
5. 🔄 Implement proxy testing service
6. 🔄 Add user subscription management
7. 🔄 Set up monitoring and logging

## Support

For issues, questions, or contributions, please reach out to the development team.

## License

MIT License - See LICENSE file for details
