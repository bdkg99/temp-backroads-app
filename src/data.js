// import Title from "./components/Title";
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "#contact", text: "contact" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", text: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", text: "twitter" },
  { id: 3, href: "https://www.squarespace.com", text: "squarespace" },
  { id: 4, href: "https://www.instagram.com", text: "instagram" },
  { id: 5, href: "https://www.pinterest.com", text: "pinterest" },
  { id: 6, href: "https://www.linkedin.com", text: "linkedin" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Fugiat, quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque",
    duration: "6",
    price: "2100",
    location: "China",
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2020",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque",
    duration: "11",
    price: "1400",
    location: "Indonesia",
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque",
    duration: "8",
    price: "5000",
    location: "Hong Kong",
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque",
    duration: "20",
    price: "8900",
    location: "Kenya",
  },
];
