const menus = {
  foodtruck:[
  { name: 'Veg. Roll', price: 40 },
  { name: 'Single Egg Roll', price: 50 },
  { name: 'Paneer Roll', price: 70 },
  { name: 'Chicken Roll', price: 80 },
  { name: 'Double Egg Roll', price: 60 },
  { name: 'Aloo Paratha', price: 35 },
  { name: 'Gobhi Paratha', price: 45 },
  { name: 'Onion Paratha', price: 45 },
  { name: 'Paneer Paratha', price: 55 },
  { name: 'Veg. Soup', price: 60 },
  { name: 'Chicken Clear Soup', price: 80 },
  { name: 'Veg. Chowmein', price: 70 },
  { name: 'Egg Chowmein', price: 90 },
  { name: 'Chicken Chowmein', price: 110 },
  { name: 'Double Egg Chow', price: 100 },
  { name: 'Butter Roti', price: 15 },
  { name: 'Tandoori Roti', price: 10 }
],
  chotu:[
  { name: 'Veg. Roll', price: 35 },
  { name: 'Single Egg Roll', price: 50 },
  { name: 'Double Egg Roll', price: 60 },
  { name: 'Aloo Paratha', price: 35 },
  { name: 'Onion Paratha', price: 45 },
  { name: 'Veg. Soup', price: 60 },
  { name: 'Veg. Chowmein', price: 70 },
  { name: 'Egg Chowmein', price: 90 },
  { name: 'Double Egg Chow', price: 100 },
  { name: 'Omlet Curry', price: 90 },
  { name: 'Tandoori Roti', price: 10 },
  { name: 'Butter Roti', price: 15 },
  { name: 'Plain Nan', price: 20 },
  { name: 'Stuffed Kulcha', price: 40 }
], 
  apna:[
  { name: 'Veg. Roll', price: 40 },
  { name: 'Single Egg Roll', price: 50 },
  { name: 'Paneer Roll', price: 70 },
  { name: 'Chicken Roll', price: 80 },
  { name: 'Double Egg Roll', price: 70 },
  { name: 'Aloo Paratha', price: 35 },
  { name: 'Gobhi Paratha', price: 45 },
  { name: 'Onion Paratha', price: 45 },
  { name: 'Paneer Paratha', price: 55 },
  { name: 'Veg. Soup', price: 60 },
  { name: 'Veg. Hot & Sour Soup', price: 70 },
  { name: 'Veg. Manchow Soup', price: 75 },
  { name: 'Chicken Clear Soup', price: 80 },
  { name: 'Chicken Hot & Sour Soup', price: 85 },
  { name: 'Chicken Manchow Soup', price: 90 },
  { name: 'Veg. Chowmein', price: 70 },
  { name: 'Egg Chowmein', price: 90 },
  { name: 'Chicken Chowmein', price: 110 },
  { name: 'Veg. Schezwan Noodle', price: 100 },
  { name: 'Egg Schezwan Noodle', price: 120 },
  { name: 'Chicken Schezwan Noodle', price: 150 },
  { name: 'Chicken Egg Schezwan Noodle', price: 160 },
  { name: 'Double Egg Chow', price: 100 },
  { name: 'Mushroom Chow', price: 140 },
  { name: 'Tandoori Roti', price: 10 },
  { name: 'Plain Naan', price: 20 },
  { name: 'Butter Naan', price: 30 },
  { name: 'Stuffed Kulcha', price: 40 },
  { name: 'Chicken Tikka', price: 210 },
  { name: 'Reshmi Kebab', price: 210 },
  { name: 'Butter Roti', price: 15 },
  { name: 'Chicken Curry', price: 120 },
  { name: 'Chicken Butter Masala', price: 140 },
  { name: 'Chicken Kassa', price: 150 },
  { name: 'Chicken Do Pyaza', price: 160 },
  { name: 'Chicken Mughlai Sabji', price: 160 },
  { name: 'Chicken Bharta', price: 160 },
  { name: 'Chicken Korma', price: 160 },
  { name: 'Chicken Korma Butter Masala', price: 170 },
  { name: 'Chicken Chatpata', price: 160 },
  { name: 'Reshmi Chicken Butter Masala', price: 250 },
  { name: 'Chicken Tikka Butter Masala', price: 250 },
  { name: 'Omlet Curry', price: 90 }
],
  paahan:[
  { name: 'Veg. Roll', price: 40 },
  { name: 'Single Egg Roll', price: 50 },
  { name: 'Paneer Roll', price: 70 },
  { name: 'Chicken Roll', price: 80 },
  { name: 'Double Egg Roll', price: 70 },
  { name: 'Aloo Paratha', price: 35 },
  { name: 'Gobhi Paratha', price: 45 },
  { name: 'Onion Paratha', price: 45 },
  { name: 'Paneer Paratha', price: 55 },
  { name: 'Veg. Soup', price: 60 },
  { name: 'Veg. Hot & Sour Soup', price: 70 },
  { name: 'Veg. Manchow Soup', price: 75 },
  { name: 'Chicken Clear Soup', price: 80 },
  { name: 'Chicken Hot & Sour Soup', price: 85 },
  { name: 'Chicken Manchow Soup', price: 90 },
  { name: 'Veg. Chowmein', price: 70 },
  { name: 'Egg Chowmein', price: 90 },
  { name: 'Chicken Chowmein', price: 110 },
  { name: 'Veg. Schezwan Noodle', price: 100 },
  { name: 'Egg Schezwan Noodle', price: 120 },
  { name: 'Chicken Schezwan Noodle', price: 150 },
  { name: 'Chicken Egg Schezwan Noodle', price: 160 },
  { name: 'Double Egg Chow', price: 100 },
  { name: 'Mushroom Chow', price: 140 },
  { name: 'Tandoori Roti', price: 10 },
  { name: 'Plain Naan', price: 20 },
  { name: 'Butter Naan', price: 30 },
  { name: 'Stuffed Kulcha', price: 40 },
  { name: 'Chicken Tikka', price: 210 },
  { name: 'Reshmi Kebab', price: 210 },
  { name: 'Butter Roti', price: 15 },
  { name: 'Chicken Curry', price: 120 },
  { name: 'Chicken Butter Masala', price: 140 },
  { name: 'Chicken Kassa', price: 150 },
  { name: 'Chicken Do Pyaza', price: 160 },
  { name: 'Chicken Mughlai Sabji', price: 160 },
  { name: 'Chicken Bharta', price: 160 },
  { name: 'Chicken Korma', price: 160 },
  { name: 'Chicken Korma Butter Masala', price: 170 },
  { name: 'Chicken Chatpata', price: 160 },
  { name: 'Reshmi Chicken Butter Masala', price: 250 },
  { name: 'Chicken Tikka Butter Masala', price: 250 },
  { name: 'Omlet Curry', price: 90 }
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
    alert(`✅ "${item}" added again!\nTotal quantity: ${existing.qty}`);
  } else {
    cart.push({ name: item, price, qty: 1 });
    alert(`✅ "${item}" added to your cart!\nTotal quantity: 1`);
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
