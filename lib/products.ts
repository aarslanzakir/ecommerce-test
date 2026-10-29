export type Product = {
  id: number;
  name: string;
  cat: string;
  price: number;
  img: string;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Street Runner Sneakers", cat: "Shoes", price: 89, img: "/images/sneakers.jpg" },
  { id: 2, name: "Classic Analog Watch", cat: "Accessories", price: 149, img: "/images/watch.jpg" },
  { id: 3, name: "Urban Daypack", cat: "Bags", price: 64, img: "/images/backpack.jpg" },
  { id: 4, name: "Wireless Headphones", cat: "Tech", price: 129, img: "/images/headphones.jpg" },
  { id: 5, name: "Aviator Sunglasses", cat: "Accessories", price: 55, img: "/images/sunglasses.jpg" },
  { id: 6, name: "Retro Film Camera", cat: "Tech", price: 219, img: "/images/camera.jpg" },
  { id: 7, name: "Insulated Steel Bottle", cat: "Lifestyle", price: 28, img: "/images/bottle.jpg" },
];
