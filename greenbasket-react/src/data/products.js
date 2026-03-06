// src/data/products.js
// Static product data used across the app.
// Replace with API calls when you have a backend.

import strawberry from '../assets/assets/images/products/fruits/strawberry.png';
import apple from '../assets/assets/images/products/fruits/apple.png';
import mango from '../assets/assets/images/products/fruits/mango.png';
import banana from '../assets/assets/images/products/fruits/banana.png';
import orange from '../assets/assets/images/products/fruits/orange.png';
import grapes from '../assets/assets/images/products/fruits/grapes.png';
import lemon from '../assets/assets/images/products/fruits/lemon.png';


export const products = [
   {
      id: 1,
      name: 'Fresh Strawberry',
      image: strawberry,
      badge: '20% off',
      type: 'Fruits',
      rating: 4.8,
      quantity: '500g',
      price: '$8.00',
      oldPrice: '$10.00',
      category: 'fruits',
      brand: 'FreshHarvest',
      inStock: true,
   },
   {
      id: 2,
      name: 'Red Apple',
      image: apple,
      badge: '15% off',
      type: 'Fruits',
      rating: 4.7,
      quantity: '1 kg',
      price: '$5.00',
      oldPrice: '$6.00',
      category: 'fruits',
      brand: 'NaturesBest',
      inStock: true,
   },
   {
      id: 3,
      name: 'Alphonso Mango',
      image: mango,
      badge: '10% off',
      type: 'Fruits',
      rating: 4.9,
      quantity: '1 kg',
      price: '$7.00',
      oldPrice: '$8.00',
      category: 'fruits',
      brand: 'FarmFresh',
      inStock: true,
   },
   {
      id: 4,
      name: 'Banana',
      image: banana,
      badge: null,
      type: 'Fruits',
      rating: 4.5,
      quantity: '500g',
      price: '$3.00',
      oldPrice: null,
      category: 'fruits',
      brand: 'FreshHarvest',
      inStock: true,
   },
   {
      id: 5,
      name: 'Orange',
      image: orange,
      badge: '5% off',
      type: 'Fruits',
      rating: 4.6,
      quantity: '1 kg',
      price: '$4.50',
      oldPrice: '$5.00',
      category: 'fruits',
      brand: 'GoodGrains',
      inStock: true,
   },
   {
      id: 6,
      name: 'Green Grapes',
      image: grapes,
      badge: '20% off',
      type: 'Fruits',
      rating: 4.7,
      quantity: '500g',
      price: '$6.00',
      oldPrice: '$7.50',
      category: 'fruits',
      brand: 'NaturesBest',
      inStock: false,
   },
   {
      id: 7,
      name: 'Lemon',
      image: lemon,
      badge: null,
      type: 'Fruits',
      rating: 4.4,
      quantity: '500g',
      price: '$2.50',
      oldPrice: null,
      category: 'fruits',
      brand: 'FarmFresh',
      inStock: true,
   },
   {
      id: 8,
      name: 'Fresh Strawberry',
      image: strawberry,
      badge: '20% off',
      type: 'Fruits',
      rating: 4.8,
      quantity: '500g',
      price: '$8.00',
      oldPrice: '$10.00',
      category: 'fruits',
      brand: 'FreshHarvest',
      inStock: true,
   },
];

export const featuredProducts = products.slice(0, 4);
export const bestSellerProducts = products.slice(2, 6);
