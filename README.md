# FalconGene - Genetic Analysis Platform

Modern genetic analysis and DNA testing platform built with Next.js 15, Firebase, and PaynKolay payment integration.

## 🚀 Features

- **Genetic Testing Services**: Multiple test types (Nutrition, Skin, Performance genetics)
- **Secure Payment Processing**: PaynKolay integration with 3D Secure
- **User Dashboard**: Track orders, view results, manage profile
- **Firebase Integration**: Authentication, Firestore database, secure data storage
- **Responsive Design**: Modern UI with Tailwind CSS and Framer Motion
- **Email Notifications**: Automated order confirmations via EmailJS

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Payment Gateway**: PaynKolay (Turkish payment provider)
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Firebase account
- PaynKolay merchant account
- EmailJS account

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/beyzakrp/falcongene-website.git
cd falcongene-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials (see Environment Variables section below).

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🔐 Environment Variables

### PaynKolay Configuration
```bash
# Current mode: test or production
NKOLAY_ENVIRONMENT=test
NEXT_PUBLIC_NKOLAY_ENVIRONMENT=test

# Test credentials (for development)
NKOLAY_TEST_SX=your_test_sx
NKOLAY_TEST_SECRET=your_test_secret

# Production credentials (for live payments)
NKOLAY_PROD_SX=your_prod_sx
NKOLAY_PROD_SECRET=your_prod_secret

# Production domain
PRODUCTION_DOMAIN=https://your-domain.com
```

### Firebase Configuration
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### EmailJS Configuration
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🧪 Payment Testing

### Test Mode (Current Default)
- Uses PaynKolay sandbox environment
- 3D Secure shows test emulator
- No real money charged
- Test cards work (see `PAYNKOLAY_PRODUCTION.md`)

### Production Mode
- Real payment processing
- Actual bank 3D Secure pages
- Real money charged
- Requires domain registration with PaynKolay

**To switch to production mode**, see: [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md)

## 📱 Features Overview

### For Customers
- Browse genetic test packages
- Secure checkout with PaynKolay
- Track order status
- View test results (coming soon)
- User authentication and profile management

### For Admins
- View all orders in Firebase console
- Monitor payment status
- Access customer data (with proper authentication)

## 🏗️ Project Structure

```
falcongene-website/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── orders/    # Order management
│   │   │   └── payment/   # Payment processing
│   │   ├── auth/          # Authentication pages
│   │   ├── dashboard/     # User dashboard
│   │   ├── components/    # React components
│   │   └── payment/       # Payment result pages
│   ├── lib/
│   │   ├── firebase.ts    # Firebase configuration
│   │   ├── paynkolay.ts   # PaynKolay integration
│   │   └── CartContext.tsx # Shopping cart state
│   └── middleware.ts       # Request validation
├── public/                 # Static assets
├── firestore.rules        # Firebase security rules
├── firestore.indexes.json # Firestore indexes
└── next.config.ts         # Next.js configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

**Important:** Before deploying to production:
- Read [`PAYNKOLAY_PRODUCTION.md`](./PAYNKOLAY_PRODUCTION.md)
- Complete [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md)
- Contact PaynKolay to register your domain

### Manual Deployment

```bash
npm run build
npm start
```

## 📚 Documentation

- [PaynKolay Production Guide](./PAYNKOLAY_PRODUCTION.md) - How to switch from test to production
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment tasks
- [EmailJS Setup](./EMAILJS_SETUP.md) - Email configuration guide

## 🔒 Security

- All payment data handled by PaynKolay (PCI DSS compliant)
- Firebase security rules for data access control
- HTTPS enforced in production
- Environment variables never committed to Git
- TLS 1.2+ for payment gateway communication

## 🐛 Troubleshooting

### "3D Secure shows test emulator"
- You're in test mode. This is expected.
- To use real bank pages, switch to production mode.

### "Payment callback not received"
- Check that callback URLs are registered with PaynKolay
- Verify `PRODUCTION_DOMAIN` environment variable
- Check Vercel deployment logs

### "Invalid credentials"
- Verify environment variables are set correctly
- Check if using correct credentials for current mode (test/prod)
- Restart development server after changing `.env.local`

## 🤝 Support

**PaynKolay Payment Issues:**
- Email: kolayposdestek@nkolay.com.tr
- Website: https://paynkolay.com.tr/iletisim

**General Questions:**
- Check existing documentation
- Review Firebase console for data issues
- Check Vercel deployment logs for errors

## 📝 License

Private - All rights reserved

## 👥 Contributors

- Beyzanur Karapıçak ([@beyzakrp](https://github.com/beyzakrp))

---

**Current Status:** ✅ Ready for Production (Pending PaynKolay domain registration)  
**Environment:** 🧪 Test Mode (Sandbox)  
**Last Updated:** October 26, 2025
