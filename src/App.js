import logo from './logo.svg';
import './App.css';

import ProductCard from "./components/ProductCard/ProductCard.component";
import ProductDetails from "./components/ProductDetails/ProductDetails.component";
import { Switch, Route } from "react-router-dom";

function App() {
  const pizzas = [
    {
      name: "Chicken Mushroom Pizza",
      price: 1000,
      image: "images/chickenmushrooms.jpg",
    },
    {
      name: "Deep Dish Pizza",
      price: 1250,
      image: "images/deep-dish-pizza.jpg",
    },
    {
      name: "Dessert Pizza",
      price: 1000,
      image: "images/dessert-pizza.jpg",
    },
    {
      name: "Mergherita Pizza",
      price: 720,
      image: "images/mergherita.jpeg",
    },
    {
      name: "Hawalinza Pizza",
      price: 1100,
      image: "images/download.jpeg",
    },
    ,
    {
      name: "Dominos Pizza",
      price: 800,
      image: "images/dominos-pizza.jpg",
    },
  ];

function App() {
  return (
    <div className="App">
     <h2>Welcome to pizza library</h2>
     <h3>Here is the best place to get your pizza!</h3>
    </div>
  );
}

export default App;
