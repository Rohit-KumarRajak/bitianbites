# Bitian Bites Backend

## 🧾 Features
- Accepts food orders from authenticated BIT Mesra students (via Google login)
- Stores order in MongoDB
- Sends admin email via EmailJS with verified user name and email

## 🚀 Setup

1. Clone or unzip this project.
2. Run `npm install`
3. Create a `.env` file from `.env.example` and fill in your credentials
4. Start the server:
```
node index.js
```

## 🔐 Google Login Format Allowed:
`btechXXXXX.YY@bitmesra.ac.in` (YY = 00 to 99 allowed)

## 🔗 Auth URL
```
http://localhost:3000/auth/google
```

## 🧪 Test Order API
POST to `/order` with JSON body containing:
- user_name
- user_email
- user_hostel
- vendor
- order_summary
- total_amount
- time