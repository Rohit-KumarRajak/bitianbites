function orderNow() {
  const message = encodeURIComponent("Hello Rohit's Production, I want to order snacks.");
  const phoneNumber = "918051568658"; // Replace with your actual WhatsApp number
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
