# Liquor E-Commerce Platform - Uganda

A mobile-first, performance-optimized e-commerce platform for selling liquor in Uganda. Built with Next.js, Node.js, and PostgreSQL.

## 🌟 Features

- **Age Verification System** - Comply with alcohol sales regulations
- **Progressive Web App (PWA)** - Works offline with poor connectivity
- **Mobile-First Design** - Optimized for 2G/3G networks common in Uganda
- **Local Payment Integration** - Flutterwave, Paystack, MTN Mobile Money, Airtel
- **Real-time Inventory Management** - Track stock across locations
- **Admin Dashboard** - Manage products, orders, and analytics
- **Image Optimization** - Lazy loading and WebP format for slow networks

## 📋 Tech Stack

### Frontend
- **Next.js 14** - React framework with SSR and PWA support
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Zustand** - State management

### Backend
- **Node.js + Express** - Fast, lightweight API server
- **PostgreSQL** - Robust relational database
- **Prisma** - Type-safe ORM
- **JWT** - Authentication

## 📁 Project Structure

```
liquor-ecommerce-ug/
├── frontend/                 # Next.js application
│   ├── app/                 # App router
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities and API clients
│   └── public/              # Static assets
├── backend/                 # Express API server
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── models/              # Database models
│   └── middleware/          # Custom middleware
└── docs/                    # Documentation
```

## 🚀 Quick Start

1. **Clone & Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.local.example .env.local
   npm run dev
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```

Access the app at `http://localhost:3000`

## 🔐 Age Verification

Strict age verification system to comply with Uganda's alcohol sales regulations.

## 💳 Payment Integration

- Flutterwave
- Paystack
- MTN Mobile Money
- Airtel Uganda

## 📱 PWA Features

- Offline browsing
- Install as app on mobile
- Image optimization for slow networks

## 🌍 Deployment

Deploy frontend on Vercel and backend on Railway/Render/AWS.

## 📄 License

MIT License
