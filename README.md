# E-Commerce Store
A full-stack e-commerce platform with React frontend and Node.js backend featuring user authentication, shopping cart, and Stripe payments.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Zustand
- **Backend**: Node.js, Express, MongoDB
- **Payment**: Stripe
- **Storage**: Cloudinary, Redis

## Setup
1. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   ```

2. **Environment variables** (create `.env` file):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_secret
   REFRESH_TOKEN_SECRET=your_secret
   UPSTASH_REDIS_URL=your_redis_url
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   STRIPE_SECRET_KEY=your_stripe_key
   CLIENT_URL=http://localhost:5173
   ```

3. **Start development**
   ```bash
   # Backend
   npm run dev
   
   # Frontend (new terminal)
   cd frontend && npm run dev
   ```

## Features
- User registration/login with JWT
- Product catalog with categories
- Shopping cart functionality
- Stripe checkout integration
- Admin dashboard for product management
- Coupon system with loyalty rewards
- Redis caching for performance

## Access
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Admin**: `/secret-dashboard` (admin users only)