const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios'); // ✅ Use axios for backend API call to EmailJS
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({ secret: 'bitiansecret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Order schema
const Order = mongoose.model('Order', new mongoose.Schema({
  userName: String,
  userEmail: String,
  hostel: String,
  vendor: String,
  items: String,
  total: Number,
  time: String
}));

// Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;
  const regex = /^btech\d{5}\.\d{2}@bitmesra\.ac\.in$/;
  if (regex.test(email)) return done(null, profile);
  return done(null, false);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// OAuth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}?user=${encodeURIComponent(req.user.displayName)}&email=${encodeURIComponent(req.user.emails[0].value)}`);
  }
);

// Order POST Route
app.post('/order', async (req, res) => {
  const { user_name, user_email, user_hostel, vendor, order_summary, total_amount, time } = req.body;
  try {
    // Save to MongoDB
    await Order.create({
      userName: user_name,
      userEmail: user_email,
      hostel: user_hostel,
      vendor,
      items: order_summary,
      total: total_amount,
      time
    });

    // Send email using EmailJS REST API
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        user_name,
        user_email,
        user_hostel,
        vendor,
        order_summary,
        total_amount,
        time
      }
    });

    res.json({ success: true, message: "Order placed and email sent." });
  } catch (err) {
    console.error("❌ Order Error:", err.message);
    res.status(500).json({ success: false, message: "Failed to process order." });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
