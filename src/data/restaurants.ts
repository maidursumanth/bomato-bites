import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";
import restaurant5 from "@/assets/restaurant-5.jpg";
import restaurant6 from "@/assets/restaurant-6.jpg";

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisines: string[];
  priceLevel: number; // 1-4
  deliveryTime: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "La Trattoria Bella",
    image: restaurant1,
    rating: 4.5,
    reviewCount: 328,
    cuisines: ["Italian", "Pizza", "Pasta"],
    priceLevel: 2,
    deliveryTime: "25-35 min",
  },
  {
    id: 2,
    name: "Sakura Sushi House",
    image: restaurant2,
    rating: 4.8,
    reviewCount: 512,
    cuisines: ["Japanese", "Sushi", "Ramen"],
    priceLevel: 3,
    deliveryTime: "30-40 min",
  },
  {
    id: 3,
    name: "El Cantina Verde",
    image: restaurant3,
    rating: 4.3,
    reviewCount: 245,
    cuisines: ["Mexican", "Tacos", "Burritos"],
    priceLevel: 1,
    deliveryTime: "20-30 min",
  },
  {
    id: 4,
    name: "Café de Paris",
    image: restaurant4,
    rating: 4.7,
    reviewCount: 189,
    cuisines: ["French", "Bistro", "Fine Dining"],
    priceLevel: 4,
    deliveryTime: "35-45 min",
  },
  {
    id: 5,
    name: "Smash Burger Co.",
    image: restaurant5,
    rating: 4.2,
    reviewCount: 673,
    cuisines: ["American", "Burgers", "Fries"],
    priceLevel: 1,
    deliveryTime: "15-25 min",
  },
  {
    id: 6,
    name: "Maharaja Palace",
    image: restaurant6,
    rating: 4.6,
    reviewCount: 401,
    cuisines: ["Indian", "Curry", "Tandoori"],
    priceLevel: 2,
    deliveryTime: "30-40 min",
  },
];
