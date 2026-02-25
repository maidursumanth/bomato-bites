export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const restaurantMenus: Record<number, MenuItem[]> = {
  1: [
    { id: 101, name: "Margherita Pizza", description: "Fresh mozzarella, basil, tomato sauce on hand-tossed dough", price: 14.99, category: "Pizza" },
    { id: 102, name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and chili flakes", price: 12.99, category: "Pasta" },
    { id: 103, name: "Bruschetta Classica", description: "Toasted bread topped with diced tomatoes, garlic, and basil", price: 8.99, category: "Starters" },
    { id: 104, name: "Risotto ai Funghi", description: "Creamy Arborio rice with wild mushrooms and parmesan", price: 16.99, category: "Mains" },
    { id: 105, name: "Tiramisu", description: "Espresso-soaked ladyfingers layered with mascarpone cream", price: 9.99, category: "Desserts" },
    { id: 106, name: "Quattro Formaggi", description: "Four cheese pizza with mozzarella, gorgonzola, fontina, parmesan", price: 16.99, category: "Pizza" },
  ],
  2: [
    { id: 201, name: "Salmon Nigiri (4pc)", description: "Fresh Atlantic salmon over seasoned sushi rice", price: 12.99, category: "Sushi" },
    { id: 202, name: "Dragon Roll", description: "Eel, avocado, cucumber topped with thin avocado slices", price: 16.99, category: "Rolls" },
    { id: 203, name: "Tonkotsu Ramen", description: "Rich pork bone broth, chashu, soft egg, nori, scallions", price: 15.99, category: "Ramen" },
    { id: 204, name: "Edamame", description: "Steamed soybeans lightly salted", price: 5.99, category: "Starters" },
    { id: 205, name: "Spicy Tuna Roll", description: "Spicy tuna, cucumber, sesame seeds, spicy mayo", price: 14.99, category: "Rolls" },
    { id: 206, name: "Mochi Ice Cream (3pc)", description: "Assorted mochi in strawberry, matcha, and mango", price: 7.99, category: "Desserts" },
  ],
  3: [
    { id: 301, name: "Carne Asada Tacos (3)", description: "Grilled steak, cilantro, onion, salsa verde on corn tortillas", price: 11.99, category: "Tacos" },
    { id: 302, name: "Chicken Burrito", description: "Grilled chicken, rice, beans, cheese, sour cream, guacamole", price: 12.99, category: "Burritos" },
    { id: 303, name: "Guacamole & Chips", description: "Fresh hand-smashed avocado with house-made tortilla chips", price: 8.99, category: "Starters" },
    { id: 304, name: "Quesadilla Grande", description: "Flour tortilla stuffed with cheese, peppers, and chicken", price: 10.99, category: "Mains" },
    { id: 305, name: "Churros (6pc)", description: "Crispy cinnamon-sugar churros with chocolate dipping sauce", price: 7.99, category: "Desserts" },
    { id: 306, name: "Fish Tacos (3)", description: "Beer-battered cod, cabbage slaw, chipotle crema", price: 13.99, category: "Tacos" },
  ],
  4: [
    { id: 401, name: "Coq au Vin", description: "Braised chicken in red wine with mushrooms and pearl onions", price: 28.99, category: "Mains" },
    { id: 402, name: "French Onion Soup", description: "Caramelized onion broth topped with Gruyère crouton", price: 12.99, category: "Starters" },
    { id: 403, name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar crust", price: 11.99, category: "Desserts" },
    { id: 404, name: "Steak Frites", description: "Pan-seared ribeye with herb butter and crispy fries", price: 34.99, category: "Mains" },
    { id: 405, name: "Salade Niçoise", description: "Tuna, green beans, olives, egg, potatoes, anchovy vinaigrette", price: 16.99, category: "Starters" },
    { id: 406, name: "Duck Confit", description: "Slow-cooked duck leg with roasted potatoes and arugula", price: 30.99, category: "Mains" },
  ],
  5: [
    { id: 501, name: "Classic Smash Burger", description: "Double smashed patties, American cheese, pickles, special sauce", price: 11.99, category: "Burgers" },
    { id: 502, name: "Bacon BBQ Burger", description: "Smashed patty, crispy bacon, cheddar, BBQ sauce, onion rings", price: 13.99, category: "Burgers" },
    { id: 503, name: "Loaded Fries", description: "Crispy fries with cheese sauce, jalapeños, bacon bits", price: 8.99, category: "Sides" },
    { id: 504, name: "Chicken Tenders (5pc)", description: "Hand-breaded chicken tenders with honey mustard", price: 9.99, category: "Sides" },
    { id: 505, name: "Milkshake", description: "Thick hand-spun shake — vanilla, chocolate, or strawberry", price: 6.99, category: "Drinks" },
    { id: 506, name: "Mushroom Swiss Burger", description: "Smashed patty, sautéed mushrooms, Swiss cheese, garlic aioli", price: 13.99, category: "Burgers" },
  ],
  6: [
    { id: 601, name: "Butter Chicken", description: "Tender chicken in creamy tomato-butter sauce with basmati rice", price: 15.99, category: "Curry" },
    { id: 602, name: "Garlic Naan (2pc)", description: "Freshly baked naan brushed with garlic butter", price: 4.99, category: "Breads" },
    { id: 603, name: "Chicken Tikka Masala", description: "Chargrilled chicken in rich spiced tomato cream sauce", price: 16.99, category: "Curry" },
    { id: 604, name: "Samosa (2pc)", description: "Crispy pastry filled with spiced potatoes and peas", price: 6.99, category: "Starters" },
    { id: 605, name: "Lamb Biryani", description: "Fragrant basmati rice layered with spiced lamb and saffron", price: 18.99, category: "Mains" },
    { id: 606, name: "Gulab Jamun (3pc)", description: "Deep-fried milk dumplings soaked in rose-cardamom syrup", price: 7.99, category: "Desserts" },
  ],
};
