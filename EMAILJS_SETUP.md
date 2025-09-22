# EmailJS Kurulum Rehberi

FalconGene iletişim formu EmailJS kullanıyor. EmailJS kurulumu için aşağıdaki adımları takip edin:

## 1. EmailJS Hesabı Oluşturma

1. [emailjs.com](https://www.emailjs.com) adresine gidin
2. Ücretsiz hesap oluşturun
3. Email doğrulamasını yapın

## 2. Email Service Ekleme

1. Dashboard'da **Email Services** sekmesine gidin
2. **Add New Service** butonuna tıklayın
3. Gmail, Outlook, Yahoo vb. servislerden birini seçin
4. Email hesabınızla bağlantı kurun
5. Service ID'yi not alın (örn: `service_abc123`)

## 3. Email Template Oluşturma

1. **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. **Template Type** olarak **HTML** seçin
4. **Subject** alanına şunu yazın:
   ```
   {{subject}} - FalconGene İletişim Formu
   ```

5. **Content** alanında **HTML** modunu seçin ve `emailjs-template.html` dosyasındaki HTML kodunu kopyalayın

**Alternatif Basit Metin Template:**
```
Konu: {{subject}} - FalconGene İletişim Formu

Yeni bir iletişim formu mesajı alındı:

Ad Soyad: {{name}}
E-posta: {{email}}
Telefon: {{phone}}
Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj FalconGene web sitesi iletişim formundan gönderilmiştir.
Tarih: {{date}}
```

6. Template ID'yi not alın (örn: `template_xyz789`)

## 4. Public Key Alma

1. **Account** sekmesine gidin
2. **API Keys** bölümünde Public Key'i bulun
3. Public Key'i not alın (örn: `user_123456789`)

## 5. Kodu Güncelleme

`src/app/iletisim/page.tsx` dosyasında aşağıdaki değerler zaten güncellenmiştir:

```javascript
const result = await emailjs.sendForm(
  'service_2plovf3',    // Your Service ID
  'template_b90xbyj',   // Your Template ID  
  form.current!,
  'mNW7aLthtnRmENhpB'   // Your Public Key
);
```

Environment variables (.env.local) dosyasında da tanımlanmıştır:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_2plovf3
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_b90xbyj
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=mNW7aLthtnRmENhpB
```

## 6. Test Etme

1. Web sitesindeki iletişim formunu doldurun
2. Gönder butonuna tıklayın
3. Email hesabınızı kontrol edin

## 7. Güvenlik (İsteğe Bağlı)

Production ortamı için:

1. EmailJS Dashboard'da **Security** sekmesine gidin
2. Domain whitelist ekleyin (falcongene.com)
3. Rate limiting aktif edin

## Sorun Giderme

- **403 Forbidden**: Public key yanlış veya domain whitelist problemi
- **400 Bad Request**: Template ID yanlış veya template değişkenleri uyumsuz
- **Network Error**: Internet bağlantısı veya EmailJS servis problemi

## Maliyet

EmailJS ücretsiz plan:
- Aylık 200 e-posta
- Temel özellikler

Daha fazla e-posta için ücretli planlara geçiş yapabilirsiniz.