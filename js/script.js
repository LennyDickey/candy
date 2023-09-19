// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import candy12 from "../assets/sushi-12.png";
import candy11 from "../assets/sushi-11.png";
import candy10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingCandy = [
  "Make Snacks",
  "Mochi",
  "Pocky",
  "Dango",
  "Taiyaki",
  "Senbei",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: candy12,
    alt: "candy-12",
    title: "Crackers",
    rating: "4.8",
    price: "$7.00",
  },
  {
    imgSrc: candy11,
    alt: "candy-11",
    title: "Chocolate",
    rating: "4.8",
    price: "$9.00",
    active: true,
  },
  {
    imgSrc: candy10,
    alt: "candy-10",
    title: "Soda",
    rating: "4.8",
    price: "$5.00",
  },
];
