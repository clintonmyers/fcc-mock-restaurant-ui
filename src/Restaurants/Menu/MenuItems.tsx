const MenuItems: MenuItems[] = [
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642976846/coffee_vugltr.jpg",
    name: "Coffee",
    description: "A blend of coffee beans from La Bolsa in Colombia.",
  },
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "OJ",
    description: "Cold pressed and freshely squeezed orange juice.",
  },
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Tea",
    description: "Cold pressed and freshely squeezed orange juice.",
  },
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Iced",
    description: "Choice of Earl Grey, GreenTea, Chamomile, or Peppermint.",
  },
  {
    category: "Drinks",
    price: 4,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Latte",
    description: "2 shots of espresso served with steamed milk of choice.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "FCC Classic",
    description:
      "Three cage-free eggs cooked any style and with bacon. Includes hash browns and toast.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "3 Egg Omelet",
    description:
      "Three cage-free eggs with Mushrooms, Peppers, Onions. Served with hash browns and toast.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Corned Beef Hash",
    description:
      "Our signature shredded hash mixed with grass-fed, dry-rubbed, corned beef, caramelized poblanos and onions, topped with two cage-free eggs; your style, & toast.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "OMG French Toast!",
    description:
      "Fresh brioche stuffed with mascarpone and topped with vanilla crème, caramel, fresh strawberries, and toasted coconut.",
  },
  {
    category: "Eats",
    price: 9,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Buttermilk Pancakes",
    description:
      "Buttermilk pancakes topped with whipped butter and powdered sugar served with Slopeside Pure Vermont Maple Syrup.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "FCC Ham Benedict",
    description:
      "Our Signature English muffin topped with fresh smashed avocado, Parmesan cheese, ripened tomatoes, two poached cage free-eggs, smoked cheddar hollandaise and everything spice.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Avocado Benny",
    description:
      "Our Signature English muffin topped with fresh smashed avocado, Parmesan cheese, ripened tomatoes, two poached cage free-eggs, smoked cheddar hollandaise and everything spice.",
  },
  {
    category: "Eats",
    price: 13,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "FCC Avocado Toast",
    description:
      "Rustic bread toasted with olive oil, smashed avocado, onion honey jam, and roasted tomato. Topped with two cage-free sunny side up eggs with a side Dijon citronette, Spiced Pepitas & Parmesan-dressed greens.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Veggie Smash",
    description:
      "Griddled, smashed sweet potatoes, a cage-free poached egg, avocado, pickled onions, paprika, drizzled with black pepper maple syrup and topped with our asparagus mushroom salad.",
  },
  {
    category: "Eats",
    price: 13,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Garden Omelet",
    description:
      "Three cage-free eggs with sauteed asparagus, mushrooms, zucchini and red bell peppers. Topped with chili-lime seasoned avocado and goat cheese.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1634070429/test.jpg",
    name: "Tofu Veggie Scramble",
    description:
      "Tofu seasoned with onion powder, salt & pepper; scrambled with choice of three fillings, served with hash browns and toast.",
  },
];
export default MenuItems;
interface MenuItems {
  category: string;
  price: number;
  url: string;
  name: string;
  description: string;
}
