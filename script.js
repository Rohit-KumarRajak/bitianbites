// Enhanced Bitian Bites JavaScript with Professional Features

const stallNotes = {
  rkfastfood: "🕙 Timings: 10 AM – 9 PM | 💥 Today's Offer: Updated soon.",
  tandoorijunction: "🔥 Open: 10 AM – 9 PM | 😋 Best in Tandoori Items",
  italianpizzahub: "🍕 Open: 10 AM – 9 PM | 💥 Today's Offer: 30% OFF(Large),20% OFF(Medium),10%OFF(Small) Pizzas",
  amritdharatecno: "⏰ 10 AM – 9 PM | 💥 Today's Offer: Updated soon.",
  brothersfoodjunction: "Open from 10 AM – 9 PM.💥 Today's Offer: Updated soon.",
  downsouth: "🕙 Timings: 10 AM – 9 PM | 💥 Today's Offer: Updated soon.",
  delhishake: "🕙 Timings: 10 AM – 9 PM | 💥 Today's Offer: Updated soon.",
  dhananjaymess: "📍 Located 0.5 km outside campus | 💰 Lower prices compared to other stalls | 🕙 Timings: 10 AM – 10 PM",
};

const stallImages = {
  rkfastfood: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  tandoorijunction: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  italianpizzahub: "assets/stallimages/italianpizzahub.jpg",
  amritdharatecno: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  brothersfoodjunction: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  downsouth: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  delhishake: "assets/stallimages/delhishake.jpg",
  dhananjaymess: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
};

const stallDescriptions = {
  rkfastfood: "Delicious noodles, momos, and rolls near H4. Known for quick service and tasty food.",
  tandoorijunction: "Specializing in authentic tandoori items with the best flavors on campus.",
  italianpizzahub: "Authentic Italian pizzas made fresh with premium ingredients and traditional recipes.",
  amritdharatecno: "Quick bites and snacks perfect for students looking for fast, affordable meals.",
  brothersfoodjunction: "Traditional Indian food with homestyle cooking and authentic flavors.",
  downsouth: "Continental and Indian cuisine with a modern twist and premium quality.",
  delhishake: "Fresh juices, shakes, and healthy beverages made with natural ingredients.",
  dhananjaymess: "Authentic North Indian mess located 0.5km outside campus. Known for homestyle cooking and budget-friendly prices."
};

// Include all the existing menu data
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
    { name: 'Chilli Garlic Veg Momos', price: 100 },
    { name: 'Chilli Garlic Chicken Momos', price: 120 },
    { name: 'Chilli Garlic Paneer Momos', price: 120 },
    { name: 'Kurkuray Veg Momos', price: 100 },
    { name: 'Kurkuray Chicken Momos', price: 120 },
    { name: 'Kurkuray Paneer Momos', price: 120 },
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
    { name: 'Chicken Tandoori Chicken Roll', price: 120 },
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

  italianpizzahub: {

    RegularVegPizza: [
  { name: "Cheese & Tomato Pizza", price: 190 },
  { name: "Hari Dhaniya & Mirch Pizza", price: 190 },
  { name: "Pane Pasta Pizza", price: 250 },
  { name: "Tandoori Paneer Pizza", price: 240 },
  { name: "Italian Spiced Pizza", price: 399 },
  { name: "Onion & Capsicum Pizza", price: 190 },
  { name: "Cheese Corn Pizza", price: 205 },
  { name: "Cheese Square Pizza", price: 195 },
  { name: "Trio Pepper Pizza", price: 225 },
  { name: "Pizza Gardenia", price: 225 },
  { name: "P Square Pizza", price: 225 },
  { name: "Wild Mushroom Pizza", price: 225 },
  { name: "Pizza Green Home", price: 245 },
  { name: "Pizza Red Home", price: 245 },
  { name: "Pizza Exotica", price: 245 },
  { name: "Chef Ajeet Choice (Veg)", price: 245 }
],
    MediumVegPizza: [
  { name: "Cheese & Tomato Pizza", price: 390 },
  { name: "Hari Dhaniya & Mirch Pizza", price: 390 },
  { name: "Pane Pasta Pizza", price: 470 },
  { name: "Tandoori Paneer Pizza", price: 450 },
  { name: "Italian Spiced Pizza", price: 549 },
  { name: "Onion & Capsicum Pizza", price: 390 },
  { name: "Cheese Corn Pizza", price: 390 },
  { name: "Cheese Square Pizza", price: 380 },
  { name: "Trio Pepper Pizza", price: 385 },
  { name: "Pizza Gardenia", price: 385 },
  { name: "P Square Pizza", price: 425 },
  { name: "Wild Mushroom Pizza", price: 425 },
  { name: "Pizza Green Home", price: 460 },
  { name: "Pizza Red Home", price: 460 },
  { name: "Pizza Exotica", price: 470 },
  { name: "Chef Ajeet Choice (Veg)", price: 470 }
],
    LargeVegPizza: [
  { name: "Cheese & Tomato Pizza", price: 575 },
  { name: "Hari Dhaniya & Mirch Pizza", price: 575 },
  { name: "Pane Pasta Pizza", price: 670 },
  { name: "Tandoori Paneer Pizza", price: 650 },
  { name: "Italian Spiced Pizza", price: 799 },
  { name: "Onion & Capsicum Pizza", price: 575 },
  { name: "Cheese Corn Pizza", price: 580 },
  { name: "Cheese Square Pizza", price: 580 },
  { name: "Trio Pepper Pizza", price: 610 },
  { name: "Pizza Gardenia", price: 610 },
  { name: "P Square Pizza", price: 630 },
  { name: "Wild Mushroom Pizza", price: 625 },
  { name: "Pizza Green Home", price: 670 },
  { name: "Pizza Red Home", price: 650 },
  { name: "Pizza Exotica", price: 670 },
  { name: "Chef Ajeet Choice (Veg)", price: 670 }
],
    RegularNonVegPizza: [
  { name: "Chicken Sausage Pizza", price: 199 },
  { name: "Char Grilled Chic Pizza", price: 210 },
  { name: "Tandoori Chic Pizza", price: 240 },
  { name: "Hot & Spicy Pizza", price: 240 },
  { name: "Trio Chic Pizza", price: 250 },
  { name: "Chef Ajeet Choice Pizza (Non-Veg)", price: 260 },
  { name: "Cocktail Pizza", price: 260 },
  { name: "Shawarma Grilled Chicken Pizza", price: 260 },
  { name: "Mexican Pizza", price: 270 }
],
    MediumNonVegPizza: [
  { name: "Chicken Sausage Pizza", price: 419 },
  { name: "Char Grilled Chic Pizza", price: 421 },
  { name: "Tandoori Chic Pizza", price: 450 },
  { name: "Hot & Spicy Pizza", price: 450 },
  { name: "Trio Chic Pizza", price: 480 },
  { name: "Chef Ajeet Choice Pizza (Non-Veg)", price: 490 },
  { name: "Cocktail Pizza", price: 490 },
  { name: "Shawarma Grilled Chicken Pizza", price: 490 },
  { name: "Mexican Pizza", price: 495 },
  { name: "Chix Garlic Naan Pizza", price: 490 }
],
    LargeNonVegPizza: [
  { name: "Chicken Sausage Pizza", price: 599 },
  { name: "Char Grilled Chic Pizza", price: 635 },
  { name: "Tandoori Chic Pizza", price: 645 },
  { name: "Hot & Spicy Pizza", price: 645 },
  { name: "Trio Chic Pizza", price: 660 },
  { name: "Chef Ajeet Choice Pizza (Non-Veg)", price: 680 },
  { name: "Cocktail Pizza", price: 680 },
  { name: "Shawarma Grilled Chicken Pizza", price: 680 },
  { name: "Mexican Pizza", price: 690 }
],
    PizzaForAll: [
    { name: 'Tomato Pizza', price: 90 },
    { name: 'Onion Pizza', price: 90 },
    { name: 'Corn Pizza', price: 110 },
    { name: 'Crispy Capsicum Pizza', price: 110 },
    { name: 'Onion & Paneer Pizza', price: 140 },
  ],

  Soup: [
    { name: 'Chumky Italian Vegetable Soup', price: 85 },
    { name: 'Cream Of Masroom', price: 75 },
    { name: 'Cream Of Chicken', price: 95 },
  ],
  Burger: [
    { name: 'Veg. Burger', price: 70 },
    { name: 'Veg. Cheese Burger', price: 80 },
    { name: 'Chef Ajeet Spl. Veg. Burger (with French Fry)', price: 120 },
    { name: 'Pizza Hub Spl. Burger (Veg.) (with French Fry)', price: 110 },
    { name: 'Chicken & Cheese Burger', price: 110 },
    { name: 'Pizza Hub Spl. Burger (Non-Veg.)', price: 130 },
    { name: 'Chef Ajeet Spl. Chicken Burger', price: 140 },
    { name: 'Chicken Salami & Cheese Burger', price: 150 },
    { name: 'Italian Fried Chicken Burger', price: 110 },
  ],

  Sandwich: [
    { name: 'Veg. & Paneer Sandwich (Half)', price: 60 },
    { name: 'Veg. & Paneer Sandwich (Full)', price: 120 },
    { name: 'Double Cheese Sandwich (Half)', price: 60 },
    { name: 'Double Cheese Sandwich (Full)', price: 120 },
    { name: 'Cheese Chilly Sandwich (Half)', price: 60 },
    { name: 'Cheese Chilly Sandwich (Full)', price: 120 },
    { name: 'Paneer Lehsooni Tikka Sandwich', price: 150 },
    { name: 'Masala Corn Sandwich', price: 140 },
    { name: 'Pizza Hub Special Sandwich (with French Fry)', price: 150 },
    { name: 'Choco Sandwich', price: 130 },
    { name: 'Grilled Chicken Tikka, Salami & Cheese Sandwich (with French Fry)', price: 180 },
    { name: 'Grilled Chicken & Cheese Sandwich (with French Fry)', price: 160 },
    { name: 'Grilled Chicken Sandwich (with French Fry)', price: 150 },
    { name: 'Grilled Chicken Salami & Cheese Sandwich (with French Fry)', price: 150 },
  ],

  Snacks: [
    { name: 'Masala Sweet Corn', price: 50 },
    { name: 'Cheese Masala Corn', price: 60 },
    { name: 'French Fry', price: 120 },
    { name: 'V Crispers', price: 130 },
    { name: 'Cheese Garlic Bread', price: 160 },
    { name: 'Veg Finger (6 pcs)', price: 95 },
    { name: 'Chilli Garlic Bowl (15 pcs)', price: 75 },
    { name: 'Italian Nugget (10 pcs)', price: 95 },
    { name: 'Italian Chess Bowl (8 pcs)', price: 120 },
    { name: 'Veg Crisper', price: 95 },
    { name: 'French Fry (Small)', price: 95 },
  ],
    
  Pasta: [
    { name: 'Pane Arrabiata', price: 85 },
    { name: 'Tandoori Pane', price: 120 },
    { name: 'Pane Alfredo', price: 110 },
    { name: 'Pane mix', price: 115 },
    { name: 'Pane Aglio E Oglio', price: 115 },
    { name: 'Spagetti Aglio E Oglio', price: 130 },
    { name: 'Spagetti Chiken', price: 145 },
  ],
  ItalianFood: [
    { name: "Italian pocket potato paratha", price: 30 },
    { name: "Italian pocket paneer paratha", price: 60 },
    { name: "Italian chicken keema pocket paratha", price: 60 },
    { name: "Italian Paneer roll", price: 70 },
    { name: "Italian chicken roll", price: 80 },
    { name: "Italian trio egg roll", price: 60 },
    { name: "Italian corn roll", price: 70 },
    { name: "Italian spring paratha", price: 30 },
    { name: "Italian chicken gravy", price: 150 }
  ],
  Coffee: [
    { name: 'Cold Coffee', price: 110 },
  ],
  Shakes: [
    { name: 'Saffron Shake', price: 120 },
    { name: 'Paan Shake', price: 120 },
    { name: 'Kitkat Shake', price: 130 },
    { name: 'Oreo Shake', price: 120 },
    { name: 'Mango Shake', price: 110 },
    { name: 'Banana Shake', price: 110 },
    { name: 'Chocolate Shake', price: 110 },
    { name: 'Strawberry Shake', price: 110 },
    { name: 'Vanilla Shake', price: 110 },
  ],

  Mocktails: [
    { name: 'Mojito Star', price: 110 },
    { name: 'Paan Mojito', price: 110 },
    { name: 'Kala Khatta Mojito', price: 110 },
    { name: 'Straw Berry Bouncer', price: 110 },
    { name: 'Mocha Cold Coffee', price: 110 },
    { name: 'Green Apple Mojito', price: 110 },
    { name: 'Masala Lemonade', price: 95 },
    { name: 'Orange Mojito', price: 95 },
    { name: 'Mango Mojito', price: 95 },
    { name: 'Grapes Mojito', price: 95 },
    { name: 'Watermelon Mojito', price: 95 },
    { name: 'Salt Lime Soda', price: 60 },
    { name: 'Sweet Lime Soda', price: 60 },
    { name: 'Masala Cold Drink', price: 60 },
  ],

  ColdDrinks: [
    { name: 'Coke', price: 30 },
    { name: 'Thums-up', price: 30 },
    { name: 'Sprite', price: 30 },
    { name: 'Maza', price: 30 },
    { name: 'Kinley', price: 20 },
    { name: 'Coolberg', price: 80 },
  ],

  VegCombos: [
    { name: 'Family Combo Veg (1 Large Pizza, 1 French Fry, 2 Grilled Sandwich, 2 Mocktails)', price: 849 },
    { name: 'Couple Combo Veg (1 Medium Pizza, 1 Cheese Garlic Bread, 2 Coke)', price: 520 },
    { name: 'Kids Combo Veg (1 Small Pizza, 1 French Fry, 1 Maza)', price: 299 },
  ],
  NonVegCombos: [
    { name: 'Family Combo Non Veg (1 Large Pizza, 1 French Fry, 1 Grilled Sandwich, 2 Mocktails)', price: 999 },
    { name: 'Couple Combo Non Veg (1 Medium Pizza, 1 Cheese Garlic Bread, 2 Coke)', price: 629 },
    { name: 'Kids Combo Non Veg (1 Small Pizza, 1 French Fry, 1 Maza)', price: 299 },
  ]
},

  amritdharatecno: {
  Maggi: [
    { name: 'Maggi', price: 30 },
    { name: 'Masala Maggi', price: 35 },
    { name: 'Butter Maggi', price: 40 },
    { name: 'Cheese Maggi', price: 45 },
    { name: 'Onion Maggi', price: 40 },
    { name: 'Egg Maggi', price: 40 },
    { name: 'Chicken Maggi', price: 60 },
  ],

  Omelette: [
    { name: 'Omelette', price: 30 },
    { name: 'Bread Omelette', price: 40 },
    { name: 'Bread Cheese Omelette', price: 50 },
  ],

    Idli: [
    { name: 'Idli', price: 40 },
  ],
  Roll: [
    { name: 'Veg Roll', price: 35 },
    { name: 'Veg Cheese Roll', price: 50 },
    { name: 'Paneer Roll', price: 60 },
    { name: 'Egg Roll (Single)', price: 40 },
    { name: 'Egg Roll (Double)', price: 50 },
    { name: 'Egg Cheese Roll', price: 55 },
    { name: 'Chicken Roll', price: 60 },
    { name: 'Chicken Cheese Roll', price: 75 },
    { name: 'Chicken Egg Roll', price: 70 },
  ],

  Chowmein: [
    { name: 'Veg Chowmein (Full)', price: 70 },
    { name: 'Veg Chowmein (Half)', price: 40 },
    { name: 'Egg Chowmein (Full)', price: 90 },
    { name: 'Egg Chowmein (Half)', price: 50 },
    { name: 'Chicken Chowmein (Full)', price: 110 },
    { name: 'Chicken Chowmein (Half)', price: 60 },
    { name: 'Chicken Egg Chowmein (Half)', price: 70 },
  ],

  Rice: [
    { name: 'Veg Fried Rice (Full)', price: 100 },
    { name: 'Veg Fried Rice (Half)', price: 60 },
    { name: 'Egg Fried Rice (Full)', price: 120 },
    { name: 'Egg Fried Rice (Half)', price: 70 },
    { name: 'Chicken Fried Rice (Full)', price: 160 },
    { name: 'Chicken Fried Rice (Half)', price: 90 },
    { name: 'Chicken Egg Fried Rice (Full)', price: 180 },
    { name: 'Chicken Egg Fried Rice (Half)', price: 100 },
  ],

  Chilli: [
    { name: 'Paneer Chilli (Full)', price: 120 },
    { name: 'Paneer Chilli (Half)', price: 70 },
    { name: 'Chicken Chilli (Full)', price: 120 },
    { name: 'Chicken Chilli (Half)', price: 70 },
  ],

  Momo: [
    { name: 'Veg Momo Fried (Full)', price: 80 },
    { name: 'Veg Momo Fried (Half)', price: 45 },
    { name: 'Veg Momo Steam (Full)', price: 60 },
    { name: 'Veg Momo Steam (Half)', price: 35 },
    { name: 'Chicken Momo Steam (Full)', price: 80 },
    { name: 'Chicken Momo Steam (Half)', price: 45 },
    { name: 'Chicken Momo Fried (Full)', price: 100 },
    { name: 'Chicken Momo Fried (Half)', price: 55 },
  ],

  Paratha: [
    { name: 'Onion Paratha', price: 35 },
    { name: 'Aloo Paratha', price: 35 },
    { name: 'Sattu Paratha', price: 40 },
    { name: 'Paneer Paratha', price: 45 },
    { name: 'Egg Paratha', price: 40 },
  ],

  Shake: [
    { name: 'Banana Shake', price: 30 },
    { name: 'Oreo Shake', price: 50 },
    { name: 'Mango Shake', price: 50 },
  ]
},

  brothersfoodjunction: {
  Paratha: [
    { name: "Chicken Cheese Paratha", price: 80 },
    { name: "Plain Paratha", price: 20 },
    { name: "Alu Paratha", price: 40 },
    { name: "Onion Paratha", price: 40 },
    { name: "Sattu Paratha", price: 40 },
    { name: "Paneer Paratha", price: 60 },
    { name: "Egg Paratha", price: 40 },
    { name: "Chicken Paratha", price: 60 },
    { name: "Alu Egg Paratha", price: 50 },
    { name: "Onion Egg Paratha", price: 50 },
    { name: "Paneer Egg Paratha", price: 70 },
    { name: "Chicken Egg Paratha", price: 70 },
    { name: "Mughlai Paratha (Veg)", price: 150 },
    { name: "Mughlai Paratha (Non-Veg)", price: 200 },
    { name: "Lachedar Paratha", price: 60 },
    { name: "Gobhi Paratha", price: 60 },
    { name: "Onion Paratha", price: 50 },
    { name: "Paneer Paratha", price: 70 },
    { name: "Sattu Paratha", price: 60 },
    { name: "Plain Paratha", price: 40 },
    { name: "Muli Paratha", price: 60 }
  ],
  Egg: [
    { name: "Boiled Egg (2pc)", price: 30 },
    { name: "Omlet (2pc)", price: 35 },
    { name: "Egg Bhurjiya (2pc)", price: 40 },
    { name: "Egg Curry Masala", price: 80 }
  ],
  Chicken: [
    { name: "Chicken Do Pyaza", price: 170 },
    { name: "Chicken Dry Fry", price: 180 },
    { name: "Chicken Dehati", price: 200 },
    { name: "Chicken Karahi", price: 180 },
    { name: "Chicken Pakora", price: 150 },
    { name: "Chicken Lollipop", price: 180 },
    { name: "Chicken Masala", price: 160 },
    { name: "Chicken Butter Masala", price: 180 },
    { name: "Chicken Curry", price: 170 },
    { name: "Chicken Chilli (Bone)", price: 150 },
    { name: "Chicken Chilli Boneless", price: 150 }
  ],
  Paneer: [
    { name: "Paneer Masala", price: 170 },
    { name: "Paneer Tikka Sahi Palak (8pcs)", price: 280 },
    { name: "Paneer Tikka (8pcs)", price: 280 },
    { name: "Paneer Sheek Kabab", price: 260 },
    { name: "Paneer Malai Kabab (8pc)", price: 330 },
    { name: "Paneer Butter Masala", price: 190 }
  ],
  RiceANDbriyani: [
    { name: "Steamed Rice", price: 80 },
    { name: "Veg Fried Rice", price: 90 },
    { name: "Paneer Fried Rice", price: 130 },
    { name: "Jeera Fried Rice", price: 90 },
    { name: "Egg Fried Rice", price: 100 },
    { name: "Chicken Biryani", price: 160 },
    { name: "Egg Biryani", price: 120 },
    { name: "Chicken Fried Rice", price: 120 },
    { name: "Mix Fried Rice", price: 150 }
  ],
  Bread: [
    { name: "Roti (Tandoori)", price: 20 },
    { name: "Roti (Tawa)", price: 20 },
    { name: "Butter Roti (Tandoori)", price: 25 },
    { name: "Butter Roti (Tawa)", price: 25 },
    { name: "Missi Roti", price: 50 },
    { name: "Nan", price: 55 },
    { name: "Butter Nan", price: 60 },
    { name: "Shahi Nan", price: 85 },
    { name: "Veg Stuffed Nan", price: 75 },
    { name: "Kashmiri Nan", price: 85 },
    { name: "Garlic Nan", price: 70 },
    { name: "Kulcha", price: 40 },
    { name: "Butter Kulcha", price: 45 },
    { name: "Masala Kulcha", price: 60 },
    { name: "Tawa Roti", price: 10 },
    { name: "Butter Roti", price: 15 },
    { name: "Lachha Roti", price: 30 }
  ],
  Chowmein: [
    { name: "Veg Chowmein", price: 60 },
    { name: "Chicken Chowmein", price: 100 },
    { name: "Egg Chowmein", price: 80 },
    { name: "Paneer Chowmein", price: 110 },
    { name: "Mix Chowmein", price: 150 },
    { name: "Chicken Egg Chowmein", price: 100 }
  ],
  Maggi: [
    { name: "Plane Maggi", price: 30 },
    { name: "Masala Maggi", price: 35 },
    { name: "Butter Maggi Masala", price: 45 },
    { name: "Egg Maggi Masala", price: 50 },
    { name: "Chicken Maggi Masala", price: 70 },
    { name: "Masala Cheese Maggi", price: 50 },
    { name: "Butter Cheese Masala Maggi", price: 55 },
    { name: "Egg Cheese Masala Maggi", price: 65 },
    { name: "Chicken Cheese Masala Maggi", price: 90 }
  ],
  Rolls: [
    { name: "Veg Roll", price: 40 },
    { name: "Veg Cheese Roll", price: 60 },
    { name: "Egg Roll (Single)", price: 50 },
    { name: "Egg Roll (Double)", price: 60 },
    { name: "Egg Cheese Roll (Double)", price: 80 },
    { name: "Egg Cheese Roll (Single)", price: 70 },
    { name: "Paneer Roll", price: 80 },
    { name: "Chicken Roll", price: 80 },
    { name: "Chicken Cheese Roll", price: 100 },
    { name: "Chicken Egg Roll", price: 90 },
    { name: "Chicken Cheese Egg Roll", price: 110 },
    { name: "Double Egg Chicken Roll", price: 100 },
    { name: "Paneer Cheese Roll", price: 100 }
  ],
  Chilli: [
    { name: "Veg Chilli", price: 90 },
    { name: "Egg Chilli", price: 120 },
    { name: "Paneer Chilli", price: 160 }
  ],
  Tea: [
    { name: "Lemon Tea", price: 10 },
    { name: "Milk Tea", price: 10 },
    { name: "Coffee", price: 10 }
  ],
  Soup: [
    { name: "Veg Hot Soup", price: 50 },
    { name: "Veg Sour Soup", price: 50 },
    { name: "Chicken Hot Soup", price: 80 },
    { name: "Chiken Sour Soup", price: 80 },
    { name: "Mix Hot Soup", price: 100 },
    { name: "Mix Sour Soup", price: 100 }
  ],
  TandooriKebab: [
    { name: "Paneer Tikka Sahi Palak (8pcs)", price: 280 },
    { name: "Paneer Tikka (8pcs)", price: 280 },
    { name: "Paneer Sheek Kabab", price: 260 },
    { name: "Paneer Malai Kabab (8pc)", price: 330 },
    { name: "Veg Sheek Kabab", price: 220 },
    { name: "Veg Hara Bhara Kabab", price: 230 },
    { name: "Corn Sheek Kabab", price: 250 },
    { name: "Chicken Tandoori", price: 380 },
    { name: "Chicken Tandoori (Half)", price: 220 },
    { name: "Chi. Shahi Kabab (8pcs)", price: 300 },
    { name: "Chicken Sheek Kabab", price: 300 },
    { name: "Chi. Leg Kabab (2pcs)", price: 330 },
    { name: "Chi. Botti Kabab (8pcs)", price: 330 },
    { name: "Chi. Malai Kabab (8pcs)", price: 330 },
    { name: "Chicken Tikka (12pcs)", price: 310 },
    { name: "Chi. Reshmi Kabab (8pc)", price: 330 },
    { name: "Chi. Banjara Kabab (8pc)", price: 330 },
    { name: "Kali Mirch Tandoori", price: 400 },
    { name: "Chicken Afghani Kabab (8pc)", price: 390 },
    { name: "Chicken Haryali Kabab (8pc)", price: 330 },
    { name: "Chicken Pahari Kabab (8pc)", price: 320 },
    { name: "Mirchi Kabab (8pc)", price: 330 }
  ]
},

  downsouth: {
  Beverages: [
    { name: 'Coffee', price: 25 },
    { name: 'Vanilla Shake', price: 95 },
    { name: 'Double Chocolate Shake', price: 110 },
    { name: 'Kit Kat Shake', price: 120 },
    { name: 'Hazelnut Nutella Shake', price: 135 },
    { name: 'Strawberry Shake', price: 105 },
    { name: 'Oreo Shake', price: 110 },
    { name: 'Blueberry Shake', price: 110 },
    { name: 'Chocolate Cake Shake', price: 165 },
    { name: 'Cold Coffee', price: 100 },
    { name: 'Blue Lagoon Mocktail', price: 70 },
    { name: 'Virgin Mojito', price: 70 },
    { name: 'Masala Cold Drink', price: 60 }
  ],

  Burger: [
    { name: 'Aloo Tikki Burger', price: 50 },
    { name: 'Veg Burger', price: 80 },
    { name: 'Paneer Burger', price: 105 },
    { name: 'Veg Cheese Burger', price: 90 },
    { name: 'Jumbo Veggie Burger', price: 100 },
    { name: 'Veg Dogla Burger', price: 135 },
    { name: 'Jumbo Aloo Tikki Burger', price: 70 },
    { name: 'Chicken KFC Burger', price: 110 },
    { name: 'Grilled Chicken Burger', price: 110 },
    { name: 'Chicken Dogla Burger', price: 150 },
    { name: 'Butter Chicken Burger', price: 120 },
    { name: 'Extra Cheese Spread', price: 10 },
    { name: 'Extra Cheese Slice', price: 15 }
  ],

  Snacks: [
    { name: 'French Fries (Salted)', price: 85 },
    { name: 'French Fries (Peri-Peri)', price: 90 },
    { name: 'Loaded Fries (Veg)', price: 110 },
    { name: 'Loaded Fries (Chicken)', price: 145 },
    { name: 'Loaded Fries (Cheese)', price: 145 }
  ],

  Pasta: [
    { name: 'Red Sauce Pasta (Veg)', price: 115 },
    { name: 'Red Sauce Pasta (Chicken)', price: 145 },
    { name: 'White Sauce Pasta (Veg)', price: 135 },
    { name: 'White Sauce Pasta (Chicken)', price: 155 },
    { name: 'Mix Sauce Pasta (Veg)', price: 145 },
    { name: 'Mix Sauce Pasta (Chicken)', price: 165 },
    { name: 'Cheese Sauce Pasta (Veg)', price: 145 },
    { name: 'Cheese Sauce Pasta (Chicken)', price: 165 },
    { name: 'Cheesy Baked Pasta (Veg)', price: 155 },
    { name: 'Cheesy Baked Pasta (Chicken)', price: 175 },
    { name: 'Butter Chicken Pasta', price: 165 },
    { name: 'Butter Paneer Pasta', price: 155 }
  ],

  Indian: [
    { name: 'Paneer Butter Masala', price: 200 },
    { name: 'Kadhai Paneer', price: 220 },
    { name: 'Paneer Do Pyaza', price: 210 },
    { name: 'Paneer Keema', price: 235 },
    { name: 'Special Malai Kofta (must try)', price: 260 },
    { name: 'Matar Paneer', price: 230 },
    { name: 'Paneer Mushroom Taj', price: 260 },
    { name: 'Matar Mushroom', price: 245 },
    { name: 'Mushroom Do Pyaza (must try)', price: 240 },
    { name: 'Babycorn Masala', price: 250 },
    { name: 'Chicken Butter Masala', price: 265 },
    { name: 'Chicken Seek Kebab Masala', price: 300 },
    { name: 'Chicken Curry (must try)', price: 250 },
    { name: 'Chicken Handi', price: 280 },
    { name: 'Chicken Do Pyaza', price: 280 }
  ],

  Dessert: [
    { name: 'Hot Brownie with Vanilla Ice-cream', price: 120 },
    { name: 'White Forest Pastry', price: 90 },
    { name: 'Dark Fantasy Pastry', price: 70 },
    { name: 'Hazelnut Pastry', price: 100 }
  ],

    
  ComboMeals: [
    { name: 'Chicken Butter Masala with 3 Roti', price: 165 },
    { name: 'Chicken Butter Masala with 2 Lachha Paratha', price: 195 },
    { name: 'Chicken Curry with 3 Roti', price: 165 },
    { name: 'Chicken Curry with 2 Lachha Paratha', price: 185 },
    { name: 'Chicken Curry with Rice', price: 165 },
    { name: 'Chicken Seek Kebab Masala with 3 Roti', price: 170 },
    { name: 'Chicken Seek Kebab Masala with 2 Lachha Paratha', price: 195 },
    { name: 'Paneer Butter Masala with 3 Roti', price: 140 },
    { name: 'Paneer Butter Masala with 2 Lachha Paratha', price: 175 },
    { name: 'Kadhai Paneer with 3 Roti', price: 150 },
    { name: 'Kadhai Paneer with 2 Lachha Paratha', price: 185 },
    { name: 'Malai Kofta with 3 Roti', price: 160 },
    { name: 'Malai Kofta with 2 Lachha Paratha', price: 190 },
    { name: 'Mushroom Do Pyaza with 3 Roti', price: 155 },
    { name: 'Mushroom Do Pyaza with 2 Lachha Paratha', price: 185 }
  ],
  
  
  Rolls: [
    { name: 'Veg Roll', price: 60 },
    { name: 'Special Mix Veg Roll', price: 100 },
    { name: 'Paneer Roll', price: 95 },
    { name: 'Paneer Peri Peri Roll', price: 95 },
    { name: 'Cheesy Italian Paneer Roll', price: 110 },
    { name: 'Paneer Chilly Roll', price: 110 },
    { name: 'Paneer Butter Masala Roll', price: 110 },
    { name: 'Mushroom Roll', price: 100 },
    { name: 'Mushroom Peri Peri Roll', price: 105 },
    { name: 'BBQ Mushroom Roll', price: 120 },
    { name: 'Veg Manchurian Roll', price: 80 },
    { name: 'Veggie Burger Roll', price: 95 },
    { name: 'Egg Roll', price: 60 },
    { name: 'Double Egg Masala Roll', price: 95 },
    { name: 'Double Egg Roll', price: 70 },
    { name: 'Triple Egg Roll', price: 80 },
    { name: 'Chicken Roll', price: 95 },
    { name: 'Chicken Egg Roll', price: 110 },
    { name: 'Special Chicken Seek Kebab Roll', price: 110 },
    { name: 'Dogla Chicken Roll', price: 120 },
    { name: 'Dogla Butter Masala Roll', price: 145 },
    { name: 'Cheesy Italian Chicken Roll', price: 115 },
    { name: 'Crispy KFC Chicken Roll', price: 120 },
    { name: 'Chicken Butter Masala Roll', price: 120 },
    { name: 'Chilly Chicken Roll', price: 110 },
    { name: 'Add cheese Spread', price: 20 }
  ],

  ChineseStarters: [
    { name: 'Veg Manchurian (Dry)', price: 120 },
    { name: 'Veg Manchurian (Gravy)', price: 135 },
    { name: 'Paneer Chilly (Half - Dry)', price: 100 },
    { name: 'Paneer Chilly (Full - Dry)', price: 190 },
    { name: 'Paneer Chilly (Half - Gravy)', price: 110 },
    { name: 'Paneer Chilly (Full - Gravy)', price: 200 },
    { name: 'Baby Corn Chilly', price: 160 },
    { name: 'Mushroom Chilly (Dry)', price: 180 },
    { name: 'Mushroom Chilly (Gravy)', price: 190 },
    { name: 'Honey Chilly Potato', price: 170 },
    { name: 'Chicken Salt & Pepper (with special dip)', price: 200 },
    { name: 'Mushroom Salt & Pepper (with special dip)', price: 180 },
    { name: 'Paneer Salt & Pepper (with special dip)', price: 190 },
    { name: 'Corn Salt & Pepper (with special dip)', price: 170 },
    { name: 'Hot & Sour Soup (Veg)', price: 90 },
    { name: 'Hot & Sour Soup (Chicken)', price: 100 },
    { name: 'Honey Chilly Chicken', price: 225 },
    { name: 'Chicken Chilly (Dry)', price: 210 },
    { name: 'Chicken Chilly (Gravy)', price: 230 },
    { name: 'Chicken BBQ Wings', price: 165 },
    { name: 'Butter Chicken Wings', price: 185 },
    { name: 'Chicken Sweet Spicy Wings', price: 165 },
    { name: 'Chicken Lollypop (4 pc)', price: 155 },
    { name: 'Chicken Lollypop (8 pc)', price: 300 }
  ],

  RiceNoodles: [
    { name: 'Chow Mein (Veg)', price: 90 },
    { name: 'Chow Mein (Veg Mix)', price: 140 },
    { name: 'Chow Mein (Egg)', price: 100 },
    { name: 'Chow Mein (Chicken)', price: 140 },
    { name: 'Chow Mein (Non-Veg Mix)', price: 155 },
    { name: 'Fried Rice (Veg)', price: 100 },
    { name: 'Fried Rice (Mix Veg)', price: 135 },
    { name: 'Fried Rice (Egg)', price: 115 },
    { name: 'Fried Rice (Chicken)', price: 155 },
    { name: 'Fried Rice (Non-Veg Mix)', price: 170 },
    { name: 'Shanghai (Veg)', price: 105 },
    { name: 'Shanghai (Mix Veg)', price: 130 },
    { name: 'Shanghai (Egg)', price: 120 },
    { name: 'Shanghai (Chicken)', price: 155 },
    { name: 'Shanghai (Non-Veg Mix)', price: 170 },
    { name: 'Burnt Garlic Noodles (Veg)', price: 120 },
    { name: 'Burnt Garlic Noodles (Egg)', price: 145 },
    { name: 'Burnt Garlic Noodles (Chicken)', price: 165 },
    { name: 'Burnt Garlic Rice (Veg)', price: 125 },
    { name: 'Burnt Garlic Rice (Egg)', price: 145 },
    { name: 'Burnt Garlic Rice (Chicken)', price: 180 },
    { name: 'Schezwan Rice (Veg)', price: 110 },
    { name: 'Schezwan Rice (Egg)', price: 125 },
    { name: 'Schezwan Rice (Chicken)', price: 170 },
    { name: 'Schezwan Noodles (Veg)', price: 110 },
    { name: 'Schezwan Noodles (Egg)', price: 120 },
    { name: 'Schezwan Noodles (Chicken)', price: 155 }
  ],

  ChineseCombo: [
    { name: 'Paneer Chilly with Veg Fried Rice', price: 140 },
    { name: 'Paneer Chilly with Veg Chow Mein', price: 140 },
    { name: 'Veg Manchurian with Veg Fried Rice', price: 125 },
    { name: 'Veg Manchurian with Veg Chow Mein', price: 125 },
    { name: 'Chicken Chilly with Veg Fried Rice', price: 160 },
    { name: 'Chicken Chilly with Veg Chow Mein', price: 160 }
  ]
},

  delhishake: {
  MocktailsMojito: [
    { name: 'Fresh Lemon Soda (M)', price: 60 },
    { name: 'Fresh Lemon Soda (XL)', price: 120 },
    { name: 'Masala Soda (M)', price: 60 },
    { name: 'Masala Soda (XL)', price: 120 },
    { name: 'Masala Cold Drink (M)', price: 60 },
    { name: 'Masala Cold Drink (XL)', price: 120 },
    { name: 'Lemon Mint Mojito (M)', price: 60 },
    { name: 'Lemon Mint Mojito (XL)', price: 120 },
    { name: 'Lemon Ice Tea (M)', price: 80 },
    { name: 'Lemon Ice Tea (XL)', price: 150 },
    { name: 'Soda Shikanji (M)', price: 80 },
    { name: 'Soda Shikanji (XL)', price: 150 },
    { name: 'Kala Khatta Masala Soda (M)', price: 80 },
    { name: 'Kala Khatta Masala Soda (XL)', price: 150 },
    { name: 'Jeera Masala Soda (M)', price: 80 },
    { name: 'Jeera Masala Soda (XL)', price: 150 },
    { name: 'Virgin Mojito (M)', price: 80 },
    { name: 'Virgin Mojito (XL)', price: 150 },
    { name: 'Blue Lagoon Mojito (M)', price: 80 },
    { name: 'Blue Lagoon Mojito (XL)', price: 150 },
    { name: 'Pineapple Mojito (M)', price: 80 },
    { name: 'Pineapple Mojito (XL)', price: 150 },
    { name: 'Pina Colada Mojito (M)', price: 80 },
    { name: 'Pina Colada Mojito (XL)', price: 150 },
    { name: 'Raspberry Mojito (M)', price: 80 },
    { name: 'Raspberry Mojito (XL)', price: 150 },
    { name: 'Strawberry Mojito (M)', price: 80 },
    { name: 'Strawberry Mojito (XL)', price: 150 },
    { name: 'Mango Mojito (M)', price: 80 },
    { name: 'Mango Mojito (XL)', price: 150 },
    { name: 'Grape Mojito (M)', price: 80 },
    { name: 'Grape Mojito (XL)', price: 150 },
    { name: 'Watermelon Mojito (M)', price: 80 },
    { name: 'Watermelon Mojito (XL)', price: 150 },
    { name: 'Black Current Mojito (M)', price: 80 },
    { name: 'Black Current Mojito (XL)', price: 150 },
    { name: 'Blueberry Mojito (M)', price: 80 },
    { name: 'Blueberry Mojito (XL)', price: 150 },
    { name: 'Green Apple Mojito (M)', price: 80 },
    { name: 'Green Apple Mojito (XL)', price: 150 },
    { name: 'Hazelnut Mojito (M)', price: 80 },
    { name: 'Hazelnut Mojito (XL)', price: 150 },
    { name: 'Irish Coffee (M)', price: 80 },
    { name: 'Irish Coffee (XL)', price: 150 },
    { name: 'Caramel Mojito (M)', price: 80 },
    { name: 'Caramel Mojito (XL)', price: 150 },
    { name: 'Grenadine Mojito (M)', price: 80 },
    { name: 'Grenadine Mojito (XL)', price: 150 },
    { name: 'Paan Mojito (M)', price: 80 },
    { name: 'Paan Mojito (XL)', price: 150 }
  ],

  FreshJuices: [
    { name: 'ABC Juice (S)', price: 60 },
    { name: 'ABC Juice (M)', price: 80 },
    { name: 'ABC Juice (L)', price: 100 },
    { name: 'ABC Juice (XL)', price: 120 },
    { name: 'Mix Fruit Juice (S)', price: 50 },
    { name: 'Mix Fruit Juice (M)', price: 70 },
    { name: 'Mix Fruit Juice (L)', price: 90 },
    { name: 'Mix Fruit Juice (XL)', price: 110 },
    { name: 'Apple Juice (S)', price: 70 },
    { name: 'Apple Juice (M)', price: 90 },
    { name: 'Apple Juice (L)', price: 110 },
    { name: 'Apple Juice (XL)', price: 130 },
    { name: 'Beetroot Juice (S)', price: 50 },
    { name: 'Beetroot Juice (M)', price: 70 },
    { name: 'Beetroot Juice (L)', price: 90 },
    { name: 'Beetroot Juice (XL)', price: 110 },
    { name: 'Carrot Juice (S)', price: 50 },
    { name: 'Carrot Juice (M)', price: 70 },
    { name: 'Carrot Juice (L)', price: 90 },
    { name: 'Carrot Juice (XL)', price: 110 },
    { name: 'Amla Juice (S)', price: 50 },
    { name: 'Amla Juice (M)', price: 70 },
    { name: 'Amla Juice (L)', price: 90 },
    { name: 'Amla Juice (XL)', price: 110 },
    { name: 'Mosambi Juice (S)', price: 50 },
    { name: 'Mosambi Juice (M)', price: 70 },
    { name: 'Mosambi Juice (L)', price: 90 },
    { name: 'Mosambi Juice (XL)', price: 110 },
    { name: 'Pineapple Juice (S)', price: 50 },
    { name: 'Pineapple Juice (M)', price: 70 },
    { name: 'Pineapple Juice (L)', price: 90 },
    { name: 'Pineapple Juice (XL)', price: 110 },
    { name: 'Orange Juice (S)', price: 50 },
    { name: 'Orange Juice (M)', price: 70 },
    { name: 'Orange Juice (L)', price: 90 },
    { name: 'Orange Juice (XL)', price: 110 },
    { name: 'Grape Juice (S)', price: 60 },
    { name: 'Grape Juice (M)', price: 80 },
    { name: 'Grape Juice (L)', price: 100 },
    { name: 'Grape Juice (XL)', price: 120 },
    { name: 'Mango Juice (S)', price: 50 },
    { name: 'Mango Juice (M)', price: 70 },
    { name: 'Mango Juice (L)', price: 90 },
    { name: 'Mango Juice (XL)', price: 120 },
    { name: 'Watermelon Juice (S)', price: 50 },
    { name: 'Watermelon Juice (M)', price: 70 },
    { name: 'Watermelon Juice (L)', price: 90 },
    { name: 'Watermelon Juice (XL)', price: 120 },
    { name: 'Muskmelon Juice (S)', price: 50 },
    { name: 'Muskmelon Juice (M)', price: 70 },
    { name: 'Muskmelon Juice (L)', price: 90 },
    { name: 'Muskmelon Juice (XL)', price: 120 },
    { name: 'Anar Juice (S)', price: 90 },
    { name: 'Anar Juice (M)', price: 120 },
    { name: 'Anar Juice (L)', price: 150 },
    { name: 'Anar Juice (XL)', price: 180 }
  ],

  FruitSalads: [
    { name: 'Mix Fruit Salad', price: 60 },
    { name: 'Pineapple Fruit Salad', price: 60 },
    { name: 'Papaya Fruit Salad', price: 60 },
    { name: 'Watermelon Fruit Salad', price: 60 },
    { name: 'Muskmelon Fruit Salad', price: 60 },
    { name: 'Mix Fruit With Dry Fruit', price: 80 },
    { name: 'Dry Fruit Salad', price: 100 }
  ],

  Buttermilk: [
    { name: 'Masala Chaas (M)', price: 30 },
    { name: 'Masala Chaas (XL)', price: 60 },
    { name: 'Sweet Chaas (M)', price: 30 },
    { name: 'Sweet Chaas (XL)', price: 60 }
  ],

  ShakesWithIceCream: [
    { name: 'Banana Shake (M)', price: 70 },
    { name: 'Banana Shake (L)', price: 90 },
    { name: 'Banana Shake (XL)', price: 120 },
    { name: 'Mango Shake (M)', price: 90 },
    { name: 'Mango Shake (L)', price: 120 },
    { name: 'Mango Shake (XL)', price: 140 },
    { name: 'Pineapple Shake (M)', price: 90 },
    { name: 'Pineapple Shake (L)', price: 120 },
    { name: 'Pineapple Shake (XL)', price: 140 },
    { name: 'Strawberry Shake (M)', price: 90 },
    { name: 'Strawberry Shake (L)', price: 120 },
    { name: 'Strawberry Shake (XL)', price: 140 },
    { name: 'Papaya Shake (M)', price: 90 },
    { name: 'Papaya Shake (L)', price: 120 },
    { name: 'Papaya Shake (XL)', price: 140 },
    { name: 'Black Current Shake (M)', price: 90 },
    { name: 'Black Current Shake (L)', price: 120 },
    { name: 'Black Current Shake (XL)', price: 140 },
    { name: 'Blueberry Shake (M)', price: 90 },
    { name: 'Blueberry Shake (L)', price: 120 },
    { name: 'Blueberry Shake (XL)', price: 140 },
    { name: 'Khajoor Shake (M)', price: 90 },
    { name: 'Khajoor Shake (L)', price: 120 },
    { name: 'Khajoor Shake (XL)', price: 140 },
    { name: 'Kesar Badam Shake (M)', price: 90 },
    { name: 'Kesar Badam Shake (L)', price: 120 },
    { name: 'Kesar Badam Shake (XL)', price: 140 },
    { name: 'Kesar Pista Shake (M)', price: 90 },
    { name: 'Kesar Pista Shake (L)', price: 120 },
    { name: 'Kesar Pista Shake (XL)', price: 140 },
    { name: 'Butter Scotch Shake (M)', price: 90 },
    { name: 'Butter Scotch Shake (L)', price: 120 },
    { name: 'Butter Scotch Shake (XL)', price: 140 },
    { name: 'Rasmalai Shake (M)', price: 90 },
    { name: 'Rasmalai Shake (L)', price: 120 },
    { name: 'Rasmalai Shake (XL)', price: 140 },
    { name: 'Chocolate Shake (M)', price: 90 },
    { name: 'Chocolate Shake (L)', price: 120 },
    { name: 'Chocolate Shake (XL)', price: 140 },
    { name: 'Oreo Shake (M)', price: 90 },
    { name: 'Oreo Shake (L)', price: 120 },
    { name: 'Oreo Shake (XL)', price: 140 },
    { name: 'Kitkat Shake (M)', price: 90 },
    { name: 'Kitkat Shake (L)', price: 120 },
    { name: 'Kitkat Shake (XL)', price: 140 }
  ],

  BrownieShakes: [
    { name: 'Brownie Shake (M)', price: 90 },
    { name: 'Brownie Shake (L)', price: 120 },
    { name: 'Brownie Shake (XL)', price: 140 },
    { name: 'Banana Brownie Shake (M)', price: 90 },
    { name: 'Banana Brownie Shake (L)', price: 120 },
    { name: 'Banana Brownie Shake (XL)', price: 140 },
    { name: 'Mango Brownie Shake (M)', price: 90 },
    { name: 'Mango Brownie Shake (L)', price: 120 },
    { name: 'Mango Brownie Shake (XL)', price: 140 },
    { name: 'Pineapple Brownie Shake (M)', price: 90 },
    { name: 'Pineapple Brownie Shake (L)', price: 120 },
    { name: 'Pineapple Brownie Shake (XL)', price: 140 },
    { name: 'Strawberry Brownie Shake (M)', price: 90 },
    { name: 'Strawberry Brownie Shake (L)', price: 120 },
    { name: 'Strawberry Brownie Shake (XL)', price: 140 },
    { name: 'Black Current Brownie Shake (M)', price: 90 },
    { name: 'Black Current Brownie Shake (L)', price: 120 },
    { name: 'Black Current Brownie Shake (XL)', price: 140 },
    { name: 'Blueberry Brownie Shake (M)', price: 90 },
    { name: 'Blueberry Brownie Shake (L)', price: 120 },
    { name: 'Blueberry Brownie Shake (XL)', price: 140 },
    { name: 'Khajoor Brownie Shake (M)', price: 90 },
    { name: 'Khajoor Brownie Shake (L)', price: 120 },
    { name: 'Khajoor Brownie Shake (XL)', price: 140 },
    { name: 'Kesar Badam Brownie Shake (M)', price: 90 },
    { name: 'Kesar Badam Brownie Shake (L)', price: 120 },
    { name: 'Kesar Badam Brownie Shake (XL)', price: 140 },
    { name: 'Butter Scotch Brownie Shake (M)', price: 90 },
    { name: 'Butter Scotch Brownie Shake (L)', price: 120 },
    { name: 'Butter Scotch Brownie Shake (XL)', price: 140 },
    { name: 'Rasmalai Brownie Shake (M)', price: 90 },
    { name: 'Rasmalai Brownie Shake (L)', price: 120 },
    { name: 'Rasmalai Brownie Shake (XL)', price: 140 },
    { name: 'Chocolate Brownie Shake (M)', price: 90 },
    { name: 'Chocolate Brownie Shake (L)', price: 120 },
    { name: 'Chocolate Brownie Shake (XL)', price: 140 }
  ],

  SpecialShakes: [
    { name: 'Traffic Jam Shake (M)', price: 120 },
    { name: 'Traffic Jam Shake (L)', price: 150 },
    { name: 'Traffic Jam Shake (XL)', price: 180 },
    { name: 'Banana Peanut Butter Shake (M)', price: 120 },
    { name: 'Banana Peanut Butter Shake (L)', price: 150 },
    { name: 'Banana Peanut Butter Shake (XL)', price: 180 },
    { name: 'Banana Khajoor Peanut Butter Shake (M)', price: 120 },
    { name: 'Banana Khajoor Peanut Butter Shake (L)', price: 150 },
    { name: 'Banana Khajoor Peanut Butter Shake (XL)', price: 180 },
    { name: 'Peanut Butter Oreo Shake (M)', price: 120 },
    { name: 'Peanut Butter Oreo Shake (L)', price: 150 },
    { name: 'Peanut Butter Oreo Shake (XL)', price: 180 },
    { name: 'Peanut Butter Brownie Shake (M)', price: 120 },
    { name: 'Peanut Butter Brownie Shake (L)', price: 150 },
    { name: 'Peanut Butter Brownie Shake (XL)', price: 180 },
    { name: 'Nutella Peanut Butter Shake (M)', price: 120 },
    { name: 'Nutella Peanut Butter Shake (L)', price: 150 },
    { name: 'Nutella Peanut Butter Shake (XL)', price: 180 },
    { name: 'Nutella Shake (M)', price: 120 },
    { name: 'Nutella Shake (L)', price: 150 },
    { name: 'Nutella Shake (XL)', price: 180 },
    { name: 'Mix Dry Fruit Shake (M)', price: 120 },
    { name: 'Mix Dry Fruit Shake (L)', price: 150 },
    { name: 'Mix Dry Fruit Shake (XL)', price: 180 }
  ],

  CoffeeWithIceCream: [
    { name: 'Cold Coffee (M)', price: 90 },
    { name: 'Cold Coffee (L)', price: 120 },
    { name: 'Cold Coffee (XL)', price: 140 },
    { name: 'Banana Coffee (M)', price: 90 },
    { name: 'Banana Coffee (L)', price: 120 },
    { name: 'Banana Coffee (XL)', price: 140 },
    { name: 'Khajoor Coffee (M)', price: 90 },
    { name: 'Khajoor Coffee (L)', price: 120 },
    { name: 'Khajoor Coffee (XL)', price: 140 },
    { name: 'Chocolate Coffee (M)', price: 90 },
    { name: 'Chocolate Coffee (L)', price: 120 },
    { name: 'Chocolate Coffee (XL)', price: 140 },
    { name: 'Oreo Coffee (M)', price: 90 },
    { name: 'Oreo Coffee (L)', price: 120 },
    { name: 'Oreo Coffee (XL)', price: 140 },
    { name: 'KitKat Coffee (M)', price: 90 },
    { name: 'KitKat Coffee (L)', price: 120 },
    { name: 'KitKat Coffee (XL)', price: 140 },
    { name: 'Brownie Coffee (M)', price: 90 },
    { name: 'Brownie Coffee (L)', price: 120 },
    { name: 'Brownie Coffee (XL)', price: 140 }
  ],

  Lassi: [
    { name: 'Sweet Lassi (M)', price: 40 },
    { name: 'Sweet Lassi (XL)', price: 80 },
    { name: 'Mango Lassi (M)', price: 60 },
    { name: 'Mango Lassi (XL)', price: 120 },
    { name: 'Banana Lassi (M)', price: 60 },
    { name: 'Banana Lassi (XL)', price: 120 },
    { name: 'Kesar Lassi (M)', price: 60 },
    { name: 'Kesar Lassi (XL)', price: 120 },
    { name: 'Chocolate Lassi (M)', price: 60 },
    { name: 'Chocolate Lassi (XL)', price: 120 },
    { name: 'Strawberry Lassi (M)', price: 60 },
    { name: 'Strawberry Lassi (XL)', price: 120 },
    { name: 'Rasmalai Lassi (M)', price: 60 },
    { name: 'Rasmalai Lassi (XL)', price: 120 }
  ]
},

    dhananjaymess: {
    NonVegSpecials: [
      { name: 'Chicken Curry', price: 160 },
      { name: 'Chicken Butter Masala', price: 170 },
      { name: 'Chicken Do Payja', price: 180 },
      { name: 'Chicken Masala', price: 170 },
      { name: 'Chicken Khadai', price: 170 },
      { name: 'Chicken Korma', price: 200 },
      { name: 'Chicken Muglai', price: 200 },
      { name: 'Chicken Chilli', price: 160 },
      { name: 'Chicken Chilli Bone-less', price: 180 },
      { name: 'Chicken Manchurian', price: 160 },
      { name: 'Chicken Manchurian Bone-less', price: 190 },
      { name: 'Chicken Dry Fry', price: 160 },
      { name: 'Full Chicken', price: 450 },
      { name: 'Half Chicken', price: 250 },
      { name: 'Fish Curry', price: 140 },
      { name: 'Fish Do Payja', price: 140 },
      { name: 'Fish Dry Fry', price: 140 },
      { name: 'Fish Fry', price: 140 }
    ],

    PaneerMushroom: [
      { name: 'Paneer Butter Masala', price: 160 },
      { name: 'Paneer Masala', price: 160 },
      { name: 'Paneer Do Payja', price: 180 },
      { name: 'Paneer Korma', price: 180 },
      { name: 'Paneer Chilli', price: 170 },
      { name: 'Paneer Manchurian', price: 170 },
      { name: 'Mushroom Butter Masala', price: 160 },
      { name: 'Mushroom Masala', price: 160 }
    ],

    VegItems: [
      { name: 'Mix Veg', price: 120 },
      { name: 'Aloo Gobi', price: 100 },
      { name: 'Aloo Matar', price: 80 },
      { name: 'Aloo Do Payja', price: 100 },
      { name: 'Veg Dal Fry', price: 140 },
      { name: 'Veg Korma', price: 140 },
      { name: 'Veg Narmatan Korma', price: 140 },
      { name: 'Aloo Dam', price: 80 },
      { name: 'Aloo Dam Kashmiri', price: 150 },
      { name: 'Veg Chilli', price: 160 },
      { name: 'Veg Manchurian', price: 120 },
      { name: 'Dal Tadka', price: 100 },
      { name: 'Dal Makhani', price: 120 },
      { name: 'Butter Dal', price: 100 },
      { name: 'Fizz Masala', price: 120 }
    ],

    Thali: [
      { name: 'Veg Thali (Paneer,Mix Veg, Dal Tadka, Roti)', price: 160 },
      { name: 'Chicken Thali (Chicken, Roti)', price: 120 }
    ],

    RiceBiryani: [
      { name: 'Katrani Normal Rice (1 Plate)', price: 60 },
      { name: 'Bab Normal Rice (1 Plate)', price: 50 },
      { name: 'Basmati Rice(1 Plate)', price: 50 },
      { name: 'Zeera Fry Rice', price: 100 },
      { name: 'Veg Fry Rice', price: 120 },
      { name: 'Veg Biryani', price: 120 },
      { name: 'Chicken Biryani', price: 140 }
    ],

    RotiParatha: [
      { name: 'Plain Roti', price: 7 },
      { name: 'Plain Paratha', price: 20 },
      { name: 'Laccha Paratha', price: 20 },
      { name: 'Aloo Paratha', price: 30 },
      { name: 'Gobi Paratha', price: 30 },
      { name: 'Sattu Paratha', price: 30 },
      { name: 'Pyaz Paratha', price: 30 },
      { name: 'Muli Paratha', price: 30 },
      { name: 'Paneer Paratha', price: 60 }
    ]
  }
};

const whatsappNumbers = {
  rkfastfood: '917759922223',
  tandoorijunction: '916202639844',
  italianpizzahub: '917050285626',
  amritdharatecno: '919934062930',
  brothersfoodjunction: '917667392577',
  downsouth: '919955581795',
  delhishake: '917050312280',
  dhananjaymess: '919939738152',
};

let cart = [];
let currentShop = '';

// Enhanced Menu Loading with Professional UI
function loadMenu(shop) {
  currentShop = shop;
  cart = [];
  renderCart();

  // Hide all other sections and show only menu
  hideAllSections();
  document.getElementById('menu').style.display = 'block';

  // Update stall image and info in menu header
  const menuStallImage = document.getElementById('menu-stall-image');
  menuStallImage.innerHTML = `<img src="${stallImages[shop]}" alt="${shop.toUpperCase()}">`;
  
  const menuHeading = document.getElementById('menu-heading');
  menuHeading.innerHTML = `📋 ${shop.toUpperCase()} Menu`;
  
  const menuStallDescription = document.getElementById('menu-stall-description');
  menuStallDescription.textContent = stallDescriptions[shop];

  // Update note content
  const noteContent = document.getElementById('note-content');
  noteContent.innerHTML = stallNotes[shop] || "Welcome to this stall.";

  // Render menu categories
  const categories = menus[shop];
  const categoryButtons = document.getElementById('category-buttons');
  const menuItemsDiv = document.getElementById('menu-items');

  categoryButtons.innerHTML = '';
  menuItemsDiv.innerHTML = `
    <div class="menu-placeholder">
      <div class="placeholder-icon">🍽️</div>
      <p>Select a category to view delicious items</p>
    </div>
  `;

  Object.keys(categories).forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category.replace(/([A-Z])/g, ' $1').trim();
    btn.onclick = () => showCategoryItems(category);
    categoryButtons.appendChild(btn);
  });

  // ✅ Smooth scroll to note with offset (avoid navbar overlap)
const noteSection = document.getElementById('note');
const y = noteSection.getBoundingClientRect().top + window.scrollY - 80; 
window.scrollTo({ top: y, behavior: 'smooth' });

}

// 🧭 Navbar Navigation Fix
function navigateToSection(sectionId) {
  // If menu is open (only menu visible), reset to main view
  const menuSection = document.getElementById('menu');
  const mainSections = document.querySelectorAll('main > section');

  // If menu is open (visible), hide it and show all sections back
  if (menuSection && menuSection.style.display === 'block') {
    menuSection.style.display = 'none';
    mainSections.forEach(sec => sec.style.display = 'block');
  }

  // Scroll to the desired section
  const target = document.querySelector(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Close mobile nav menu if open
  closeMenu && closeMenu();
}

// Hide all main sections except menu
function hideAllSections() {
  const sections = ['popular-items', 'shops', 'hostel', 'cart'];
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'none';
    }
  });
}

// Show all sections when going back
function showAllSections() {
  const sections = ['popular-items', 'shops', 'hostel', 'cart'];
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
    }
  });
}

// Enhanced category item display
function showCategoryItems(category) {
  const items = menus[currentShop][category];
  const menuItemsDiv = document.getElementById('menu-items');
  menuItemsDiv.innerHTML = '';

  // Update active category button
  const categoryButtons = document.querySelectorAll('#category-buttons button');
  categoryButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <div class="menu-item-info">
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-price">₹${item.price}</div>
      </div>
      <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    menuItemsDiv.appendChild(div);
  });
}

// Enhanced go back function
function goBack() {
  document.getElementById('menu').style.display = 'none';
  showAllSections();

  // Reset note to default
  const noteContent = document.getElementById('note-content');
  noteContent.innerHTML = `More stalls and food options will be added. Stay tuned!<br><br>
  💬 After placing your order on WhatsApp, if there's a delay in response — whether the message is seen or not — you can make a WhatsApp call to the stall directly using the displayed number.`;

  // Smooth scroll to stalls section
  document.getElementById('shops').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

// Enhanced add to cart with animations
function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
    showNotification(`✅ ${name} quantity updated! Total: ${existing.qty}`, 'success');
  } else {
    cart.push({ name, price, qty: 1 });
    showNotification(`✅ ${name} added to cart!`, 'success');
  }
  renderCart();
  updateCartBadge();
  
  // Add visual feedback to button
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = 'Added!';
  button.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
  }, 1000);
}

// Enhanced cart rendering
function renderCart() {
  const cartList = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  const emptyCart = cartList.querySelector('.empty-cart');
  
  if (cart.length === 0) {
    if (!emptyCart) {
      cartList.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>Your cart is empty</p>
          <span>Add some delicious items to get started!</span>
        </div>
      `;
    }
    cartSummary.style.display = 'none';
    return;
  }

  cartList.innerHTML = '';
  cartSummary.style.display = 'block';
  
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const itemTotal = item.qty * item.price;
    subtotal += itemTotal;
    
    const li = document.createElement('div');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-details">₹${item.price} × ${item.qty} = ₹${itemTotal}</div>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
        <span class="qty">${item.qty}</span>
        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `;
    cartList.appendChild(li);
  });

  // Update cart summary
  document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
  document.getElementById('cart-total').textContent = `₹${subtotal}`;
  
  updateCartBadge();
}

// Update item quantity
function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(index) {
  if (cart[index]) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    renderCart();
    showNotification(`🗑️ ${itemName} removed from cart`, 'info');
  }
}

// Enhanced navbar functionality
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('menu-toggle');
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

function closeMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('menu-toggle');
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
}

// Update cart badge
function updateCartBadge() {
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = totalItems;
  
  if (totalItems > 0) {
    badge.style.display = 'flex';
    badge.style.animation = 'pulse 0.3s ease';
  } else {
    badge.style.display = 'flex'; // Always show, even if 0
  }
}

// Enhanced scroll functions
function scrollToCart() {
  if (document.getElementById('menu').style.display === 'block') {
    goBack();
    setTimeout(() => {
      document.getElementById('cart').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  } else {
    document.getElementById('cart').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  closeMenu();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToStalls() {
  document.getElementById('shops').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToStall(stallId) {
  // Scroll smoothly to the stalls section
  const stallSection = document.querySelector(`#shops`);
  stallSection.scrollIntoView({ behavior: 'smooth' });

  // Wait a bit for scroll animation, then highlight the correct stall
  setTimeout(() => {
    const targetStall = document.querySelector(`.stall-card[data-stall="${stallId}"]`);
    if (targetStall) {
      targetStall.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetStall.style.boxShadow = "0 0 25px 5px rgba(255, 107, 53, 0.6)";
      targetStall.style.transform = "scale(1.05)";
      setTimeout(() => {
        targetStall.style.boxShadow = "";
        targetStall.style.transform = "";
      }, 1500);
    }
  }, 800);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-weight: 600;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Enhanced place order function
function placeOrder() {
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const hostel = document.getElementById('hostel-select').value;

  if (!currentShop || cart.length === 0) {
    showNotification('Please select a stall and add items to cart.', 'error');
    return;
  }

  if (!hostel || !name || !email) {
    showNotification('Please fill in all delivery details.', 'error');
    return;
  }

  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (total < 100) {
    showNotification("Minimum order amount should be ₹100.", 'error');
    return;
  }

  const orderText = cart.map(i => `- ${i.name} x ${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const message =
    `Hello, I want to order from ${currentShop.toUpperCase()}:\n${orderText}\n\nTotal: ₹${total}\nName: ${name}\nEmail: ${email}\nHostel: ${hostel}`;

  const waUrl = `https://wa.me/${whatsappNumbers[currentShop]}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  const now = new Date();
  const time = now.toLocaleString();

  // Send email notification
  emailjs.send("service_9dpoazn", "template_mvegzx9", {
    order_summary: orderText,
    total_amount: total,
    user_name: name,
    user_email: email,
    user_hostel: hostel,
    vendor: currentShop.toUpperCase(),
    time: time
  }).then(() => {
    showNotification("Order placed! Confirmation sent to vendor and admin.", 'success');
  }).catch((error) => {
    showNotification("Order placed, but email failed to send.", 'error');
  });

  cart = [];
  renderCart();
}

// Initialize navbar event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking outside on mobile
  document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (window.innerWidth <= 768 && 
        navMenu && navMenu.classList.contains('active') &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });
  
  // Hide navbar initially (before login)
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.display = 'none';
  }

  // Initialize cart badge
  updateCartBadge();
});

// Enhanced smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});






