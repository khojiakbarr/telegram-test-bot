# 🤖 Telegram Quiz Bot

Bu Telegram bot foydalanuvchilarga viktorina savollarini beradi va tasodifiy javoblarni qaytaradi.

## 📋 Bot funksiyalari

- `/start` komandasi orqali botni ishga tushirish
- Tasodifiy savollar ko'rsatish
- Foydalanuvchi javobini va bot javobini solishtirish
- Javoblar sonini hisoblash
- Keyingi savolga o'tish imkoniyati

## 🚀 O'rnatish va sozlash

### 1. Bot yaratish

1. Telegram'da [@BotFather](https://t.me/BotFather) botiga yozing
2. `/newbot` komandasi orqali yangi bot yarating
3. Bot nomi va username ni kiriting
4. BotFather sizga bot tokenini beradi

### 2. Tokenni o'rnatish

`server.js` faylida `YOUR_BOT_TOKEN_HERE` o'rniga o'z bot tokeningizni qo'ying:

```javascript
const token = 'YOUR_REAL_BOT_TOKEN_HERE';
```

### 3. Botni ishga tushirish

Terminal'da quyidagi komandalarni bajaring:

```bash
cd c:\Users\Hojiakbar\Desktop\bot
npm start
```

Yoki:

```bash
node server.js
```

## 📱 Bot foydalanish

1. Telegram'da o'z botingizni toping
2. `/start` komandasi yuboring
3. "🎯 Viktorinani boshlash" tugmasini bosing
4. Savolga javob bering
5. Bot sizning javobingiz va o'z tasodifiy javobini ko'rsatadi
6. "➡️ Keyingi savol" tugmasini bosib davom eting

## 🎯 Bot xususiyatlari

### Savollar ro'yxati

Bot quyidagi mavzularda savollar beradi:
- Geografiya
- Dasturlash
- Umumiy bilim
- Fan va texnologiya

### Javoblar tizimi

- Har bir savol uchun 4 ta javob varianti mavjud
- Bot tasodifiy javob tanlaydi
- Foydalanuvchi va bot javoblari solishtiriladi
- Javoblagan savollar soni hisoblanadi

## 🔧 Sozlamalar

### Yangi savollar qo'shish

`server.js` faylida `quizData` arrayiga yangi savollar qo'shing:

```javascript
{
    id: 7, // Keyingi ID raqami
    question: "Sizning savolingiz?",
    answers: [
        "Javob 1",
        "Javob 2", 
        "Javob 3",
        "Javob 4"
    ]
}
```

### Xatoliklar bilan ishlash

Agar bot ishlamasa:

1. Token to'g'ri kiritilganini tekshiring
2. Internet aloqasi borligini tekshiring
3. Terminal'da xatolik xabarlarini o'qing
4. Bot tokenini yangilang (kerak bo'lsa)

## 📦 Loyiha fayllari

- `package.json` - Loyiha sozlamalari va kutubxonalar
- `server.js` - Asosiy bot kodi
- `node_modules/` - O'rnatilgan kutubxonalar (avtomatik yaratiladi)

## 🛠️ Qo'shimcha sozlash

### Webhook o'rniga Polling

Hozircha bot polling rejimida ishlaydi. Production muhit uchun webhook sozlashni tavsiya etamiz.

### Ma'lumotlar bazasi

Hozir foydalanuvchi ma'lumotlari xotirada saqlanadi. Katta loyihalar uchun ma'lumotlar bazasi ishlating.

## 🆘 Yordam

Agar muammolar bo'lsa:
1. Console'dagi xatolik xabarlarini tekshiring
2. Bot tokenini yangilang
3. Internetga ulanishni tekshiring
4. Dependencies to'g'ri o'rnatilganini tekshiring

---

**Muvaffaqiyat tilaymanю Bot sizga yoqsin! 🎉**