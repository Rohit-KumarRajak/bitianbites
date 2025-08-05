const menus = {
  rkfastfood: {
  Noodles: [
    { name: 'Veg. Noodles (Full)', price: 80 },
    { name: 'Veg. Noodles (Half)', price: 50 },
    { name: 'Veg. Sehezwan Noodles (Full)', price: 90 },
    { name: 'Veg. Sehezwan Noodles (Half)', price: 60 },
    { name: 'Paneer Noodles (Full)', price: 120 },
    { name: 'Paneer Noodles (Half)', price: 70 },
    { name: 'Mushroom Noodles (Full)', price: 120 },
    { name: 'Mushroom Noodles (Half)', price: 70 },
    { name: 'Egg Noodles (Full)', price: 100 },
    { name: 'Egg Noodles (Half)', price: 60 },
    { name: 'Chicken Noodles (Full)', price: 120 },
    { name: 'Chicken Noodles (Half)', price: 70 },
    { name: 'Non-Veg Noodles (Full)', price: 140 },
    { name: 'Non-Veg Noodles (Half)', price: 80 },
    { name: 'Veg Mix Noodles (Full)', price: 150 },
    { name: 'Veg Mix Noodles (Half)', price: 90 },
  ],

  Momos: [
    { name: 'Steam Veg Momos', price: 70 },
    { name: 'Steam Chicken Momos', price: 80 },
    { name: 'Steam Paneer Momos', price: 80 },
    { name: 'Fry Veg Momos', price: 80 },
    { name: 'Fry Chicken Momos', price: 90 },
    { name: 'Fry Paneer Momos', price: 90 },
    { name: 'Tandoori Veg Momos', price: 100 },
    { name: 'Tandoori Chicken Momos', price: 120 },
    { name: 'Tandoori Paneer Momos', price: 120 },
    { name: 'Afghani Veg Momos', price: 100 },
    { name: 'Afghani Chicken Momos', price: 120 },
    { name: 'Afghani Paneer Momos', price: 120 },
    { name: 'Malai Veg Momos', price: 100 },
    { name: 'Malai Chicken Momos', price: 120 },
    { name: 'Malai Paneer Momos', price: 120 },
    { name: 'Haryali Veg Momos', price: 100 },
    { name: 'Haryali Chicken Momos', price: 120 },
    { name: 'Haryali Paneer Momos', price: 120 },
    { name: 'Achari Veg Momos', price: 100 },
    { name: 'Achari Chicken Momos', price: 120 },
    { name: 'Achari Paneer Momos', price: 120 },
    { name: 'Kurkuray Veg Momos', price: 100 },
    { name: 'Kurkuray Chicken Momos', price: 120 },
    { name: 'Kurkuray Paneer Momos', price: 120 },
  ],

  Tikka: [
    { name: 'Paneer Tandoori Tikka', price: 150 },
    { name: 'Paneer Malai Tikka', price: 150 },
    { name: 'Paneer Haryali Tikka', price: 150 },
    { name: 'Paneer Maharaja Tikka', price: 150 },
    { name: 'Chicken Tandoori Tikka', price: 160 },
    { name: 'Chicken Malai Tikka', price: 160 },
    { name: 'Chicken Haryali Tikka', price: 160 },
    { name: 'Maharaja Chicken Tikka', price: 160 },
  ],

  SpecialChicken: [
    { name: 'Hot Chicken Fried wings (4 pcs)', price: 140 },
    { name: 'Hot Grill Chicken (Legs & Thai)', price: 140 },
    { name: 'Boil Chicken (1 Container)', price: 130 },
  ],

  Rice: [
    { name: 'Veg. Fried Rice (Full)', price: 110 },
    { name: 'Veg. Fried Rice (Half)', price: 60 },
    { name: 'Veg. Schezwan Fried Rice (Full)', price: 110 },
    { name: 'Veg. Schezwan Fried Rice (Half)', price: 60 },
    { name: 'Paneer Fried Rice (Full)', price: 140 },
    { name: 'Paneer Fried Rice (Half)', price: 80 },
    { name: 'Mushroom Fried Rice (Full)', price: 130 },
    { name: 'Mushroom Fried Rice (Half)', price: 80 },
    { name: 'Veg. Mix Fried Rice (Full)', price: 140 },
    { name: 'Veg. Mix Fried Rice (Half)', price: 80 },
    { name: 'Egg Fried Rice (Full)', price: 120 },
    { name: 'Egg Fried Rice (Half)', price: 70 },
    { name: 'Chicken Fried Rice (Full)', price: 130 },
    { name: 'Chicken Fried Rice (Half)', price: 70 },
    { name: 'Non Veg. Mix Fried Rice (Full)', price: 150 },
    { name: 'Non Veg. Mix Fried Rice (Half)', price: 80 },
    { name: 'Corn Fried Rice (Full)', price: 140 },
    { name: 'Corn Fried Rice (Half)', price: 80 },
  ],

  Maggi: [
    { name: 'Plain Maggi', price: 50 },
    { name: 'Masala Maggi', price: 60 },
    { name: 'Paneer Masala cheese Maggi', price: 80 },
    { name: 'Chiken Masala cheese Maggi', price: 80 },
  ],

  Pasta: [
    { name: 'White Sauce Pasta (Veg)', price: 120 },
    { name: 'White Sauce Pasta (Non-Veg)', price: 140 },
    { name: 'Red Sauce Pasta (Veg)', price: 120 },
    { name: 'Red Sauce Pasta (Non-Veg)', price: 140 },
    { name: 'Mix Sauce Pasta (Veg)', price: 120 },
    { name: 'Mix Sauce Pasta (Non-Veg)', price: 140 },
  ],

  RollVeg: [
    { name: 'Veg. Roll', price: 50 },
    { name: 'Paneer Roll', price: 80 },
    { name: 'Paneer Afghani Tikka Roll', price: 110 },
    { name: 'Paneer Tandoori Tikka Roll', price: 110 },
    { name: 'Paneer Malai Tikka Roll', price: 110 },
  ],

  RollNonVeg: [
    { name: 'Single Egg Roll', price: 60 },
    { name: 'Double Egg Roll', price: 70 },
    { name: 'Chicken Roll', price: 80 },
    { name: 'Egg Chicken Roll', price: 90 },
    { name: 'Double Egg Chicken Roll', price: 100 },
    { name: 'Chicken Tandoori Tikka Roll', price: 120 },
    { name: 'Chicken Malai Tikka Roll', price: 120 },
    { name: 'Chicken Maharaja Roll', price: 120 },
  ],

  Shanghai: [
    { name: 'Veg Shanghai (Full)', price: 110 },
    { name: 'Veg Shanghai (Half)', price: 60 },
    { name: 'Mix Shanghai (Full)', price: 130 },
    { name: 'Mix Shanghai (Half)', price: 70 },
    { name: 'Non Veg Mix Shanghai (Full)', price: 150 },
    { name: 'Non Veg Mix Shanghai (Half)', price: 80 },
    { name: 'Egg Shanghai (Full)', price: 110 },
    { name: 'Egg Shanghai (Half)', price: 60 },
    { name: 'Chicken Shanghai (Full)', price: 130 },
    { name: 'Chicken Shanghai (Half)', price: 70 },
  ],

  SoyaChap: [
    { name: 'Tandoori Soya Chap (10ps)', price: 130 },
    { name: 'Afghani Soya Chap (10ps)', price: 130 },
    { name: 'Haryani Soya Chap (10ps)', price: 130 },
    { name: 'Achari Soya Chap (10ps)', price: 130 },
    { name: 'Malai Soya Chap (10ps)', price: 130 },
  ],

  RKSpecial: [
    { name: 'Chicken Laccha Paratha', price: 110 },
    { name: 'Chicken Biryani', price: 160 },
    { name: 'Chola Batura', price: 80 },
    { name: 'Chicken Lollipop', price: 280 },
    { name: 'Chicken Dry Fry', price: 230 },
    { name: 'Boiled Chicken (250gm) (adv. order)', price: 130 },
  ],

  Chilli: [
    { name: 'Veg Chilli (Full)', price: 130 },
    { name: 'Veg Chilli (Half)', price: 70 },
    { name: 'Paneer Chilli (Full)', price: 190 },
    { name: 'Paneer Chilli (Half)', price: 100 },
    { name: 'Chicken Chilli (Full)', price: 170 },
    { name: 'Chicken Chilli (Half)', price: 100 },
    { name: 'Mushroom Chilli', price: 150 },
    { name: 'Baby Corn Chilli', price: 150 },
  ],

  TeaCoffee: [
    { name: 'Tea/Coffee (Small)', price: 10 },
    { name: 'Tea/Coffee (Medium)', price: 15 },
    { name: 'Tea/Coffee (Large)', price: 20 },
  ]
},

  tandoorijunction: {
  Noodles: [
    { name: 'Veg. Desi Noodles (Full)', price: 80 },
    { name: 'Veg. Desi Noodles (Half)', price: 50 },
    { name: 'Veg Chilli Garlic Noodles (Full)', price: 90 },
    { name: 'Veg Chilli Garlic Noodles (Half)', price: 60 },
    { name: 'Veg Schezwan Noodles (Full)', price: 90 },
    { name: 'Veg Schezwan Noodles (Half)', price: 60 },
    { name: 'Paneer Noodles (Full)', price: 120 },
    { name: 'Paneer Noodles (Half)', price: 70 },
    { name: 'Mushroom Noodles (Full)', price: 120 },
    { name: 'Mushroom Noodles (Half)', price: 70 },
    { name: 'Veg Classic Noodles (Full)', price: 140 },
    { name: 'Veg Classic Noodles (Half)', price: 80 },
    { name: 'Egg Noodles (Full)', price: 100 },
    { name: 'Egg Noodles (Half)', price: 60 },
    { name: 'Chicken Noodles (Full)', price: 120 },
    { name: 'Chicken Noodles (Half)', price: 70 },
    { name: 'Non Veg Classic Noodles (Full)', price: 140 },
    { name: 'Non Veg Classic Noodles (Half)', price: 80 },
  ],

  Momos: [
    { name: 'Steam Veg', price: 70 },
    { name: 'Steam Chicken', price: 80 },
    { name: 'Steam Paneer', price: 80 },
    { name: 'Fry Veg', price: 80 },
    { name: 'Fry Chicken', price: 90 },
    { name: 'Fry Paneer', price: 90 },
    { name: 'Tandoori Veg', price: 100 },
    { name: 'Tandoori Chicken', price: 120 },
    { name: 'Tandoori Paneer', price: 120 },
    { name: 'Afghani Veg', price: 100 },
    { name: 'Afghani Chicken', price: 120 },
    { name: 'Afghani Paneer', price: 120 },
    { name: 'Malai Veg', price: 100 },
    { name: 'Malai Chicken', price: 120 },
    { name: 'Malai Paneer', price: 120 },
    { name: 'Haryali Veg', price: 100 },
    { name: 'Haryali Chicken', price: 120 },
    { name: 'Haryali Paneer', price: 120 },
    { name: 'Achari Veg', price: 100 },
    { name: 'Achari Chicken', price: 120 },
    { name: 'Achari Paneer', price: 120 },
    { name: 'Chilli Garlic Veg', price: 100 },
    { name: 'Chilli Garlic Chicken', price: 120 },
    { name: 'Chilli Garlic Paneer', price: 120 },
    { name: 'Kurkuray Veg', price: 100 },
    { name: 'Kurkuray Chicken', price: 120 },
    { name: 'Kurkuray Paneer', price: 120 },
  ],

  Tikka: [
    { name: 'Paneer Tandoori Tikka', price: 150 },
    { name: 'Paneer Malai Tikka', price: 150 },
    { name: 'Paneer Haryali Tikka', price: 150 },
    { name: 'Paneer Banjara Tikka', price: 150 },
    { name: 'Chicken Tandoori Tikka', price: 160 },
    { name: 'Chicken Malai Tikka', price: 160 },
    { name: 'Chicken Haryali Tikka', price: 160 },
    { name: 'Banjara Chicken Tikka', price: 160 },
  ],

  ChillyNonVeg: [
    { name: 'Chilli Chicken Boneless (10 pcs)', price: 150 },
    { name: 'Chicken 65 (10 pcs)', price: 150 },
    { name: 'Garlic Chicken Chilli (10 pcs)', price: 150 },
  ],

  SpecialChicken: [
    { name: 'Hot Chicken Fried Wings (4 pcs)', price: 140 },
    { name: 'Hot Grill Chicken (Legs & Thai)', price: 140 },
    { name: 'Chicken Lollipop (4 pcs)', price: 140 },
    { name: 'Boil Chicken (1 container)', price: 130 },
  ],

  Rice: [
    { name: 'Veg. Fried Rice (Full)', price: 90 },
    { name: 'Veg. Fried Rice (Half)', price: 50 },
    { name: 'Veg. Schezwan Fried Rice (Full)', price: 100 },
    { name: 'Veg. Schezwan Fried Rice (Half)', price: 60 },
    { name: 'Paneer Fried Rice (Full)', price: 120 },
    { name: 'Paneer Fried Rice (Half)', price: 70 },
    { name: 'Mushroom Fried Rice (Full)', price: 120 },
    { name: 'Mushroom Fried Rice (Half)', price: 70 },
    { name: 'Veg. Classic Fried Rice (Full)', price: 140 },
    { name: 'Veg. Classic Fried Rice (Half)', price: 80 },
    { name: 'Egg Fried Rice (Full)', price: 110 },
    { name: 'Egg Fried Rice (Half)', price: 60 },
    { name: 'Chicken Fried Rice (Full)', price: 130 },
    { name: 'Chicken Fried Rice (Half)', price: 70 },
    { name: 'Non Veg. Classic Fried Rice (Full)', price: 140 },
    { name: 'Non Veg. Classic Fried Rice (Half)', price: 80 },
  ],

  Maggi: [
    { name: 'Plane Maggi', price: 50 },
    { name: 'Masala Maggi', price: 60 },
    { name: 'Paneer Masala Cheese Maggi', price: 80 },
    { name: 'Chiken Masala Cheese Maggi', price: 80 },
  ],

  RollVeg: [
    { name: 'Veg Roll', price: 50 },
    { name: 'Paneer Roll', price: 80 },
    { name: 'Tandoori Chaap Roll', price: 100 },
    { name: 'Malai Chaap Roll', price: 100 },
    { name: 'Paneer Tandoori Tikka Roll', price: 110 },
    { name: 'Paneer Malai Tikka Roll', price: 110 },
  ],

  RollNonVeg: [
    { name: 'Single Egg Roll', price: 60 },
    { name: 'Double Egg Roll', price: 70 },
    { name: 'Chicken Roll', price: 80 },
    { name: 'Classic Chicken Roll', price: 90 },
    { name: 'Chicken Egg Roll', price: 90 },
    { name: 'Double Egg Chicken Roll', price: 120 },
    { name: 'Chicken Tandoori 'Chicken Roll', price: 120 },
    { name: 'Chicken Malai Tikka Roll', price: 120 },
    { name: 'Classic Chicken Egg Tandoori Tikka Roll', price: 130 },
    { name: 'Classic Chicken Egg Malai Tikka Roll', price: 130 },
    { name: 'Chicken Banjara Tikka Roll', price: 130 },
  ],

  SoyaChap: [
    { name: 'Tandoori Soya Chap (10ps)', price: 130 },
    { name: 'Afghani Soya Chap (10ps)', price: 130 },
    { name: 'Haryani Soya Chap (10ps)', price: 130 },
    { name: 'Achari Soya Chap (10ps)', price: 130 },
    { name: 'Malai Soya Chap (10ps)', price: 130 },
    { name: 'Chilli Garlic Soya Chap (10ps)', price: 130 },
  ],

  Pasta: [
    { name: 'White Sauce Classic Cheese Pasta (Veg)', price: 120 },
    { name: 'White Sauce Classic Cheese Pasta (Non. Veg)', price: 140 },
    { name: 'Red Sauce Classic Cheese Pasta (Veg)', price: 120 },
    { name: 'Red Sauce Classic Cheese Pasta (Non. Veg)', price: 140 },
    { name: 'Mix Sauce Classic Cheese Pasta (Veg)', price: 120 },
    { name: 'Mix Sauce Classic Cheese Pasta (Non. Veg)', price: 140 },
  ],

  ChineseCombo: [
    { name: 'Veg Noodles & Veg Manchurian', price: 130 },
    { name: 'Veg Rice & Veg Manchurian', price: 130 },
    { name: 'Veg Noodle & Paneer Manchurian', price: 140 },
    { name: 'Veg Rice & Paneer Manchurian', price: 140 },
    { name: 'Veg Noodles & Chicken Manchurian', price: 150 },
    { name: 'Veg Rice & Chicken Manchurian', price: 150 },
  ],

  Soup: [
    { name: 'Veg Hot & Sour Soup(not updated)', price: 100 },
    { name: 'Veg Mix Hot & Sour Soup(not updated)', price: 100 },
    { name: 'Chicken Hot & Sour Soup(not updated)', price: 100 },
  ],

  ChillyVeg: [
    { name: 'Veg Chilli', price: 120 },
    { name: 'Paneer Chilli', price: 140 },
    { name: 'Mushroom Chilli', price: 140 },
    { name: 'Potato Chilli', price: 130 },
  ],

  Special: [
    { name: 'Special Chicken Dum Biryani (Half)', price: 80 },
    { name: 'Special Chicken Dum Biryani (Full)', price: 150 },
  ]
},

  chotu: {
    Rolls: [
      { name: 'Veg. Roll', price: 35 },
      { name: 'Single Egg Roll', price: 50 }
    ],
    Curries: [
      { name: 'Omlet Curry', price: 90 }
    ]
  }
};

const whatsappNumbers = {
  rkfastfood: '917759922223',
  tandoorijunction: '916202639844',
  apna: '918051568658',
  paahan: '918051568658'
};

let cart = [];
let currentShop = '';

function loadMenu(shop) {
  currentShop = shop;
  cart = [];
  renderCart();
  document.getElementById('shops').style.display = 'none';
  document.getElementById('menu').style.display = 'block';

  const categories = menus[shop];
  const categoryButtons = document.getElementById('category-buttons');
  const menuItemsDiv = document.getElementById('menu-items');

  categoryButtons.innerHTML = '';
  menuItemsDiv.innerHTML = '<p>Select a category to view items.</p>';

  Object.keys(categories).forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.onclick = () => showCategoryItems(category);
    categoryButtons.appendChild(btn);
  });
}

function showCategoryItems(category) {
  const items = menus[currentShop][category];
  const menuItemsDiv = document.getElementById('menu-items');
  menuItemsDiv.innerHTML = '';

  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">Add</button>
    `;
    menuItemsDiv.appendChild(div);
  });
}

function goBack() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('shops').style.display = 'block';
}

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
    alert(`✅ ${name} added again. Total: ${existing.qty}`);
  } else {
    cart.push({ name, price, qty: 1 });
    alert(`✅ ${name} added to cart.`);
  }
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(i => {
    const li = document.createElement('li');
    li.textContent = `${i.name} x ${i.qty} = ₹${i.qty * i.price}`;
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



