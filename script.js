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
      <button class='add-btn' onclick='addToCart("${item.name}", ${item.price}, this)'>Add</button>
    `;
    menuItemsDiv.appendChild(div);
  });
}

function addToCart(item, price, btn) {
  cart.push({ item, price });
  const li = document.createElement('li');
  li.textContent = `${item} - ₹${price}`;
  document.getElementById('cart-items').appendChild(li);
  if (btn) btn.textContent = 'Added';
  btn.disabled = true;
  btn.classList.add('added');
}

function placeOrder() {
  const name = document.getElementById('user-name').value.trim();
  const hostel = document.getElementById('hostel-select').value;

  if (!currentShop || cart.length === 0) {
    alert('Please select a stall and add items to cart.');
    return;
  }

  if (!hostel || !name) {
    alert('Please fill in your name and hostel.');
    return;
  }

  const total = cart.reduce((sum, c) => sum + c.price, 0);

  if (total < 50) {
    alert("Minimum order amount should be ₹50.");
    return;
  }

  const orderText = cart.map(c => `- ${c.item}: ₹${c.price}`).join('\n');
  const message =
    `Hello, I want to order from ${currentShop.toUpperCase()}:\n${orderText}\n\nTotal: ₹${total}\nName: ${name}\nHostel: ${hostel}`;

  const waUrl = `https://wa.me/${whatsappNumbers[currentShop]}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  const now = new Date();
  const time = now.toLocaleString();

  emailjs.send("service_9dpoazn", "template_mvegzx9", {
    order_summary: orderText,
    total_amount: total,
    user_name: name,
    user_hostel: hostel,
    vendor: currentShop.toUpperCase(),
    time: time
  }).then(() => {
    alert("Order placed! Confirmation sent to vendor and admin.");
  }).catch((error) => {
    alert("Order placed, but email failed to send: " + JSON.stringify(error));
  });

  cart = [];
  document.getElementById('cart-items').innerHTML = '';
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.textContent = 'Add';
    btn.disabled = false;
    btn.classList.remove('added');
  });
}
