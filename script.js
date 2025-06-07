const menus = {
  foodtruck: [
    { name: 'Anda Roll', price: 50 },
    { name: 'Chicken Roll', price: 70 },
    { name: 'Paneer Roll', price: 60 },
    { name: 'Veg Chowmein', price: 40 },
  ],
  chotu: [
    { name: 'Tea', price: 10 },
    { name: 'Samosa', price: 15 },
    { name: 'Bread Pakora', price: 20 },
    { name: 'Aloo Chop', price: 10 },
  ],
  apna: [
    { name: 'Paneer Tikka', price: 90 },
    { name: 'Veg Pulao', price: 70 },
    { name: 'Mixed Veg', price: 50 },
    { name: 'Roti (2 pc)', price: 10 },
  ],
  paahan: [
    { name: 'Chicken Curry', price: 100 },
    { name: 'Tandoori Roti', price: 10 },
    { name: 'Egg Curry', price: 60 },
    { name: 'Rice Plate', price: 80 },
  ]
};

const whatsappNumbers = {
  foodtruck: '918051568658',
  chotu: '918051568658',
  apna: '918051568658',
  paahan: '918051568658'
};

let cart = [];
let currentShop = '';

function loadMenu(shop) {
  currentShop = shop;
  cart = [];
  document.getElementById('cart-items').innerHTML = '';
  const menuItemsDiv = document.getElementById('menu-items');
  const menuSection = document.getElementById('menu');
  menuSection.style.display = 'block';
  menuItemsDiv.innerHTML = '';
  menus[shop].forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button class='add-btn' onclick='addToCart("${item.name}", ${item.price})'>Add</button>
    `;
    menuItemsDiv.appendChild(div);
  });
}

function addToCart(item, price) {
  const existing = cart.find(i => i.name === item);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: item, price, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(i => {
    const li = document.createElement('li');
    li.textContent = `${i.name} x ${i.qty} = ₹${i.price * i.qty}`;
    cartList.appendChild(li);
  });
}

function placeOrder() {
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const hostel = document.getElementById('hostel-select').value;

  if (!currentShop || cart.length === 0) {
    alert('Please select a stall and add items to cart.');
    return;
  }

  if (!hostel || !name || !email) {
    alert('Please select your hostel.');
    return;
  }

  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (total < 50) {
    alert("Minimum order amount should be ₹50.");
    return;
  }

  const orderText = cart.map(i => `- ${i.name} x ${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const message =
    `Hello, I want to order from ${currentShop.toUpperCase()}:\n${orderText}\n\nTotal: ₹${total}\nName: ${name}\nEmail: ${email}\nHostel: ${hostel}`;

  const waUrl = `https://wa.me/${whatsappNumbers[currentShop]}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  const now = new Date();
  const time = now.toLocaleString();

  emailjs.send("service_9dpoazn", "template_mvegzx9", {
    order_summary: orderText,
    total_amount: total,
    user_name: name,
    user_email: email,
    user_hostel: hostel,
    vendor: currentShop.toUpperCase(),
    time: time
  }).then(() => {
    alert("Order placed! Confirmation sent to vendor and admin.");
  }).catch((error) => {
    alert("Order placed, but email failed to send: " + JSON.stringify(error));
  });

  cart = [];
  renderCart();
}
