const stallNotes = {
  rkfastfood: "🕙 Timings: 10 AM – 9 PM | 💥 Today's Offer: Discount Of 5% on every order.",
  tandoorijunction: "🔥 Open: 10 AM – 9 PM | 😋 Best in Tandoori Items",
  italianpizzahub: "🍕 Open: 10 AM – 9 PM | 💥 Today's Offer: 10% discount on Order above 500.",
  amritdharatecno: "⏰ 10 AM – 9 PM | 💥 Today's Offer: Updated soon.",
  brothersfoodjunction: "Open from 10 AM – 9 PM.💥 Today's Offer: Discount Of 5% on every order."
};

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
}
};

const whatsappNumbers = {
  rkfastfood: '917759922223',
  tandoorijunction: '916202639844',
  italianpizzahub: '917050285626',
  amritdharatecno: '919934062930',
  brothersfoodjunction: '917667392577'
};

let cart = [];
let currentShop = '';

function loadMenu(shop) {
  currentShop = shop;
  cart = [];
  renderCart();

  document.getElementById('shops').style.display = 'none';
  document.getElementById('menu').style.display = 'block';

  // 🟡 Update Note
  const noteContent = document.getElementById('note-content');
  noteContent.innerText = stallNotes[shop] || "Welcome to this stall.";

  // 🟡 Update Menu Heading
  const menuHeading = document.getElementById('menu-heading');
  menuHeading.innerHTML = `📋 Menu - <span style="color:#ff3f6c">${shop.toUpperCase()}</span>`;

  // 🟡 Render Menu
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

  // 🟡 Reset Note to default
  const noteContent = document.getElementById('note-content');
  noteContent.innerText = "More stalls and food options will be added. Stay tuned!";

  // 🟡 Reset Menu Heading
  const menuHeading = document.getElementById('menu-heading');
  menuHeading.innerText = "📋 Menu";
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

  if (total < 100) {
    alert("Minimum order amount should be ₹100.");
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










