# 🛒 Full-Stack E-Commerce Platform

<div align="center">

### A Modern, Feature-Rich E-Commerce Platform Built with Next.js 15 & MongoDB

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](https://e-commerce-platform-six-kappa.vercel.app/)  
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

A production-ready, full-stack e-commerce platform showcasing modern web development practices. Built with Next.js 15's latest features including Server Components, Server Actions, and advanced routing patterns. This project demonstrates enterprise-level architecture with authentication, payment processing, admin dashboard, and real-time data visualization.

### 🌟 Why This Project?

- **Modern Stack**: Utilizes the latest Next.js 15 and React 19 features
- **Production-Ready**: Includes authentication, payments, and admin tools
- **Best Practices**: Follows industry standards for scalability and maintainability
- **Learning Resource**: Comprehensive lessons covering every aspect of development
- **Real-World Application**: Fully functional e-commerce platform ready for deployment

---

## ✨ Key Features

### 🛍️ Customer Experience

- **Product Catalog**
  - Advanced search and filtering
  - Category-based navigation
  - Quick view modals with Next.js parallel routes
  - Product image carousels
  - Real-time stock updates

- **Shopping Features**
  - Server-side cart management using HTTP cookies
  - Persistent browsing history
  - Wishlist functionality
  - Product recommendations
  - Today's deals and best sellers

- **Checkout & Payments**
  - Multi-step checkout process
  - PayPal integration
  - Stripe payment gateway
  - Order confirmation emails
  - Invoice generation

- **User Account**
  - Secure authentication (Email/Password, Google OAuth, Magic Link)
  - Profile management
  - Order history and tracking
  - Review and rating system
  - Address book management

### 👨‍💼 Admin Dashboard

- **Analytics & Reporting**
  - Sales overview with interactive charts (Recharts)
  - Revenue analytics
  - User activity metrics
  - Best-selling products
  - Order statistics

- **Product Management**
  - CRUD operations for products
  - Image upload with UploadThing
  - Inventory management
  - Category management
  - Bulk operations

- **Order Management**
  - View and process orders
  - Update order status
  - Mark orders as paid/delivered
  - Print invoices
  - Order filtering and search

- **User Management**
  - View and manage users
  - Role-based access control
  - User activity monitoring
  - Ban/unban users

- **Content Management**
  - Dynamic web pages
  - Homepage customization
  - Banner management
  - SEO settings

### 🎨 Design & UX

- Fully responsive design (mobile-first)
- Dark/light theme support
- Multiple color theme options
- Accessible UI components (Shadcn/ui)
- Smooth animations and transitions
- Optimized images with Next.js Image
- SEO optimized

### 🌐 Additional Features

- Multilingual support
- Email notifications (Resend)
- Form validation (React Hook Form + Zod)
- Server Actions for data mutations
- Optimistic UI updates
- Error handling and logging

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **React 19** | UI library with Server Components |
| **Tailwind CSS** | Utility-first CSS framework |
| **Shadcn/ui** | Beautiful, accessible component library |
| **Recharts** | Data visualization and charts |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |

### Backend
| Technology | Purpose |
|------------|---------|
| **Next.js API Routes** | Backend API endpoints |
| **Server Actions** | Data mutations without API routes |
| **Auth.js** | Authentication & authorization |
| **Mongoose** | MongoDB object modeling |
| **MongoDB** | NoSQL database |

### Integrations
| Service | Purpose |
|---------|---------|
| **PayPal** | Payment processing |
| **Stripe** | Payment processing |
| **UploadThing** | File uploads |
| **Resend** | Transactional emails |
| **Google OAuth** | Social authentication |

### Development & Deployment
| Tool | Purpose |
|------|---------|
| **TypeScript** | Type safety (optional) |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **Vercel** | Hosting & deployment |
| **GitHub** | Version control |

---

## 🎬 Demo

### Live Application
👉 **[Visit Live Demo](https://e-commerce-platform-six-kappa.vercel.app/)**

### Test Credentials

**Admin Account:**
- Email: `admin@example.com`
- Password: `123456`

**Customer Account:**
- Register your own account or use the demo credentials

---

## 🚀 Getting Started


### Installation

1. **Clone the repository**

```bash
git clone https://github.com/asifahemmed09/e-commerce-platform.git
cd e-commerce-platform
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
# or
yarn install --legacy-peer-deps
```

3. **Set up environment variables**

Duplicate the example environment file:

```bash
cp .example-env .env.local
```

Then configure your environment variables (see [Environment Variables](#environment-variables) section below).

4. **Set up the database**

Choose one of the following options:

**Option A: Cloud MongoDB (Recommended)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a new cluster
- Get your connection string
- Update `MONGODB_URI` in `.env.local`

**Option B: Local MongoDB**
- Install MongoDB from [mongodb.org](https://www.mongodb.com/try/download/community)
- Start MongoDB service
- Update `MONGODB_URI` in `.env.local` (default: `mongodb://localhost:27017/amazona`)

5. **Seed the database**

```bash
npm run seed
```

This will populate your database with sample products, categories, and admin user.

6. **Run the development server**

```bash
npm run dev
```

7. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

8. **Sign in as admin**

- Click "Sign In"
- Email: `admin@example.com`
- Password: `123456`

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_APP_SECRET=your_paypal_app_secret
PAYPAL_API_URL=https://api-m.sandbox.paypal.com # Use sandbox for testing

# Stripe
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com

# File Upload (UploadThing)
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# App Settings
NEXT_PUBLIC_APP_NAME=Your Store Name
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### How to Get API Keys

- **MongoDB**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- **NextAuth Secret**: Generate with `openssl rand -base64 32`
- **Google OAuth**: [Google Cloud Console](https://console.cloud.google.com/)
- **PayPal**: [PayPal Developer](https://developer.paypal.com/)
- **Stripe**: [Stripe Dashboard](https://dashboard.stripe.com/register)
- **Resend**: [Resend](https://resend.com/)
- **UploadThing**: [UploadThing](https://uploadthing.com/)

---

## 📖 Usage

### Customer Flow

1. **Browse Products**: Navigate through categories or use search
2. **View Details**: Click on products for detailed information
3. **Add to Cart**: Select quantity and add items to cart
4. **Checkout**: Sign in and proceed to checkout
5. **Payment**: Choose PayPal or Stripe for payment
6. **Track Order**: View order status in your account

### Admin Flow

1. **Sign In**: Use admin credentials
2. **Dashboard**: View analytics and metrics
3. **Manage Products**: Add, edit, or delete products
4. **Process Orders**: Update order status and mark as delivered
5. **Manage Users**: View and edit user accounts
6. **Customize Content**: Update homepage and web pages

### Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Seed database
npm run seed

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📁 Project Structure

```
nextjs-amazona/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (root)/                   # Public routes
│   ├── admin/                    # Admin dashboard routes
│   ├── api/                      # API routes
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── ui/                       # Shadcn UI components
│   ├── shared/                   # Shared components
│   └── ...
├── lib/                          # Utility functions
│   ├── actions/                  # Server Actions
│   ├── db/                       # Database utilities
│   ├── models/                   # Mongoose models
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── images/                   # Images
│   └── ...
├── lessons/                      # Tutorial lessons
├── .env.local                    # Environment variables
├── .example-env                  # Example env file
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

---



## 🔌 API Documentation

### Authentication Endpoints
```
POST   /api/auth/signin          - Sign in user
POST   /api/auth/signup          - Register new user
POST   /api/auth/signout         - Sign out user
GET    /api/auth/session         - Get current session
```

### Product Endpoints
```
GET    /api/products             - Get all products
GET    /api/products/:id         - Get product by ID
POST   /api/products             - Create product (Admin)
PUT    /api/products/:id         - Update product (Admin)
DELETE /api/products/:id         - Delete product (Admin)
```

### Order Endpoints
```
GET    /api/orders               - Get user orders
GET    /api/orders/:id           - Get order by ID
POST   /api/orders               - Create order
PUT    /api/orders/:id/pay       - Mark order as paid
PUT    /api/orders/:id/deliver   - Mark order as delivered
```

### User Endpoints
```
GET    /api/users/profile        - Get user profile
PUT    /api/users/profile        - Update user profile
GET    /api/users                - Get all users (Admin)
PUT    /api/users/:id            - Update user (Admin)
DELETE /api/users/:id            - Delete user (Admin)
```

---


## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

---

## 💬 Support

### Get Help

- 📧 **Email**: [asifahemmed.dev@gmail.com](asifahemmed.dev@gmail.com)

---

## 🙏 Acknowledgments

### Built With

- [Next.js](https://nextjs.org/) - The React Framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Auth.js](https://authjs.dev/) - Authentication
- [Recharts](https://recharts.org/) - Charts

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**[Back to Top](#-full-stack-e-commerce-platform)**

Made with ❤️ by [Asif Ahemmed](asifahemmed.dev@gmail.com)

</div>
