# TrueProxies LLC - Website

A modern, production-ready platform for selling premium proxy services.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/morganalexandrareese-a11y/TrueProxies-LLC.git
cd TrueProxies-LLC

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # Reusable React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
└── types/            # TypeScript type definitions (add as needed)
```

## Features

- ✨ Modern, responsive design
- 🎨 Dark theme with gradient accents
- 📱 Mobile-first approach
- ⚡ Fast performance optimized
- 🔒 Security-focused
- 💳 Pricing section with multiple tiers
- 📊 Feature showcase
- 🎯 Call-to-action buttons

## Next Steps

1. **Backend API**: Set up Node.js/Express or similar backend
2. **Database**: Configure PostgreSQL or MongoDB
3. **Authentication**: Implement user signup and login
4. **Payment Integration**: Add Stripe or similar payment processor
5. **Admin Dashboard**: Build management interface
6. **Deployment**: Deploy to Vercel, AWS, or similar platform

## Environment Variables

Create a `.env.local` file for development:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Private - TrueProxies LLC
