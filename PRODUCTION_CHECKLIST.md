# PaynKolay Production Hazırlık Listesi

Bu doküman PaynKolay entegrasyonunun production'a çıkarılması için gerekli adımları içerir.

## 🔧 Environment Değişkenleri

### Production Environment Ayarları
```bash
# .env.production
NKOLAY_ENVIRONMENT=production

# Production PaynKolay Credentials
NKOLAY_PROD_SX=135623618|xuKiEQOShZd7zQh8gVEs6QpRyxPUsTg8TWV+JL7JUy/wmSD/mj6hMqG58grCLA9CVqzLBalRmRf+Ud5cy3kwt8zZ6Ljiij+/PWWI1FDyYeipL9NGEDtXWwpTXB2M3eNVxSl3+A==
NKOLAY_PROD_SECRET=_XmF1jyEAHsLYELO6favP

# Vercel Domain
VERCEL_URL=yourdomainhere.com
```

## 🔒 Güvenlik Kontrolleri

### 1. SSL/TLS Sertifikaları
- [x] TLS 1.2+ kullanımı zorunlu
- [x] HTTPS redirect aktif
- [x] Güvenli headers (HSTS, CSP, etc.)

### 2. API Güvenliği
- [x] Rate limiting (DDoS koruması)
- [x] Input validation
- [x] Error handling (sensitive bilgi sızıntısı yok)
- [x] CORS ayarları

### 3. Environment Variables
- [x] Production credentials ayrı
- [x] Secret keys güvenli saklanıyor
- [x] Debug mode kapalı

## 📊 Monitoring & Logging

### 1. Error Tracking
```typescript
// Sentry, LogRocket veya benzeri entegre edilmeli
console.error('Payment error:', error);
// Production'da detaylı loglama
```

### 2. Payment Analytics
```typescript
// Google Analytics, Mixpanel events
gtag('event', 'payment_success', {
  value: amount,
  currency: 'TRY',
  transaction_id: authCode
});
```

## 🧪 Test Checklist

### Ödeme Akışı Testleri
- [ ] Başarılı ödeme (test kartı: 4546711234567894)
- [ ] Başarısız ödeme (test kartı: 4546711234567886)
- [ ] 3D Secure akışı
- [ ] Timeout durumları
- [ ] Network hataları
- [ ] Concurrent ödeme denemeleri

### Database Testleri
- [ ] Sipariş kaydetme
- [ ] Ödeme güncelleme
- [ ] Duplicate prevention
- [ ] Data consistency

### Email Testleri
- [ ] Müşteri bildirimi
- [ ] Admin bildirimi
- [ ] Email template'leri
- [ ] Bounce handling

## 🚀 Deployment Adımları

### 1. Pre-deployment
```bash
# Test coverage kontrolü
npm run test

# Build kontrolü
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### 2. Environment Setup
```bash
# Vercel environment variables
vercel env add NKOLAY_ENVIRONMENT production
vercel env add NKOLAY_PROD_SX "your-production-sx"
vercel env add NKOLAY_PROD_SECRET "your-production-secret"
```

### 3. DNS & Domain
- [ ] Domain SSL sertifikası aktif
- [ ] PaynKolay callback URL'leri güncel
- [ ] CNAME/A records doğru

### 4. Monitoring Setup
```bash
# Error tracking
npm install @sentry/nextjs

# Analytics
npm install gtag
```

## 📧 EmailJS Production Setup

### Template Configuration
```javascript
// Müşteri bildirimi template
template_params: {
  to_email: "{{customerEmail}}",
  customer_name: "{{customerName}}",
  order_id: "{{orderId}}",
  amount: "{{amount}}",
  test_type: "{{testType}}",
  payment_date: "{{paymentDate}}"
}

// Admin bildirimi template
template_params: {
  to_email: "orders@falcongene.com",
  customer_info: "{{customerName}} - {{customerEmail}}",
  order_details: "{{packageName}} - {{testType}}",
  payment_info: "{{amount}} TL - {{authCode}}"
}
```

## 🔄 Backup & Recovery

### Database Backup
```bash
# Firebase backup rules
// Firestore backup planı aktif edilmeli
```

### Payment Data
```typescript
// Ödeme logları ayrı collection'da saklanmalı
collection('payment_logs').add({
  clientRefCode,
  timestamp: new Date(),
  status: 'success',
  amount,
  authCode
});
```

## 📞 Support & Monitoring

### PaynKolay Support
- Technical Support: [PaynKolay dokümantasyon]
- Integration Issues: API documentation
- Payment Issues: Merchant dashboard

### Internal Monitoring
```typescript
// Health check endpoint
export async function GET() {
  try {
    const config = getPaynKolayConfig();
    return NextResponse.json({ 
      status: 'healthy',
      environment: config.environment,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy',
      error: error.message 
    }, { status: 500 });
  }
}
```

## 🎯 Performance Optimization

### Caching Strategy
```typescript
// API response caching
export const revalidate = 3600; // 1 hour

// Static generation
export const dynamic = 'force-static';
```

### Bundle Optimization
```bash
# Bundle analyzer
npm install @next/bundle-analyzer

# Image optimization
next/image kullanımı zorunlu
```

## 📋 Launch Checklist

### Pre-Launch
- [ ] Tüm testler başarılı
- [ ] Production credentials aktif
- [ ] Monitoring sistemleri hazır
- [ ] Backup planı aktif
- [ ] Error handling tamamlanmış

### Launch Day
- [ ] DNS propagation kontrolü
- [ ] SSL sertifika kontrolü
- [ ] Payment flow testi (küçük tutar)
- [ ] Error monitoring aktif
- [ ] Support team hazır

### Post-Launch
- [ ] 24 saat monitoring
- [ ] Error rates kontrolü
- [ ] Payment success rates
- [ ] User feedback toplama
- [ ] Performance metrikleri

Bu checklist'i takip ederek güvenli bir production deployment sağlayabilirsiniz.