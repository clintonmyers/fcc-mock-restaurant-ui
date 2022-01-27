const MenuItems: MenuItem[] = [
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
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642986682/orangejuice_tn6qba.jpg",
    name: "OJ",
    description: "Cold pressed and freshely squeezed orange juice.",
  },
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642986807/tea_ami59z.jpg",
    name: "Tea",
    description: "Choice of Earl Grey, Green Tea, Chamomile, or Peppermint.",
  },
  {
    category: "Drinks",
    price: 2,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642987388/icedtea_vg18uc.jpg",
    name: "Iced Tea",
    description: "Allegro loose-leaf black iced tea, unsweetened.",
  },
  {
    category: "Drinks",
    price: 4,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642987649/ezgif.com-gif-maker_yq079n.jpg",
    name: "Latte",
    description: "2 shots of espresso served with steamed milk of choice.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642987853/classicEggs_r7vspe.jpg",
    name: "FCC Classic",
    description:
      "Three cage-free eggs cooked any style and with bacon. Includes hash browns and toast.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642987977/threeEgg_cjhulp.jpg",
    name: "3 Egg Omelet",
    description:
      "Three cage-free eggs with Mushrooms, Peppers, Onions. Served with hash browns and toast.",
  },
  {
    category: "Eats",
    price: 14,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642988070/cornedBeefjpg_bvhja3.jpg",
    name: "Corned Beef Hash",
    description:
      "Our signature shredded hash mixed with grass-fed, dry-rubbed, corned beef, caramelized poblanos and onions, topped with two cage-free eggs; your style, & toast.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642988737/frenchToast_umcjxq.jpg",
    name: "OMG French Toast!",
    description:
      "Fresh brioche stuffed with mascarpone and topped with vanilla crème, caramel, fresh strawberries, and toasted coconut.",
  },
  {
    category: "Eats",
    price: 9,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642988947/pancakesButtermilk_t7qxfl.jpg",
    name: "Buttermilk Pancakes",
    description:
      "Buttermilk pancakes topped with whipped butter and powdered sugar served with Slopeside Pure Vermont Maple Syrup.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642989378/benny_xnxehn.jpg",
    name: "FCC Ham Benedict",
    description:
      "Our Signature English muffin topped with fresh smashed avocado, Parmesan cheese, ripened tomatoes, two poached cage free-eggs, smoked cheddar hollandaise and everything spice.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642989754/bennyavocado_fds92l.jpg",
    name: "Avocado Benny",
    description:
      "Our Signature English muffin topped with fresh smashed avocado, Parmesan cheese, ripened tomatoes, two poached cage free-eggs, smoked cheddar hollandaise and everything spice.",
  },
  {
    category: "Eats",
    price: 13,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642989754/bennyavocado_fds92l.jpg",
    name: "FCC Avocado Toast",
    description:
      "Rustic bread toasted with olive oil, smashed avocado, onion honey jam, and roasted tomato. Topped with two cage-free sunny side up eggs with a side Dijon citronette, Spiced Pepitas & Parmesan-dressed greens.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642990045/veggie_q3bbu7.jpg",
    name: "Veggie Smash",
    description:
      "Griddled, smashed sweet potatoes, a cage-free poached egg, avocado, pickled onions, paprika, drizzled with black pepper maple syrup and topped with our asparagus mushroom salad.",
  },
  {
    category: "Eats",
    price: 13,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642990154/garden_p8styh.jpg",
    name: "Garden Omelet",
    description:
      "Three cage-free eggs with sauteed asparagus, mushrooms, zucchini and red bell peppers. Topped with chili-lime seasoned avocado and goat cheese.",
  },
  {
    category: "Eats",
    price: 12,
    url: "https://res.cloudinary.com/dlsacnkot/image/upload/v1642990316/tofu_g4s9lq.jpg",
    name: "Tofu Veggie Scramble",
    description:
      "Tofu seasoned with onion powder, salt & pepper; scrambled with choice of three fillings, served with hash browns and toast.",
  },
];
export default MenuItems;

export interface MenuItem {
  category: string;
  price: number;
  url: string;
  name: string;
  description: string;
}
