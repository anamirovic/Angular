// import { createReducer, on } from '@ngrx/store';
// import { Book } from '../models/book';
// import * as CartActions from '../store/cart.action';

// export interface CartItem {
//   book: Book;
//   quantity: number;
// }

// export interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// export const cartReducer = createReducer(
//   initialState,
//   on(CartActions.addToCart, (state, { book, quantity }) => {
//     const existingItem = state.items.find((item) => item.book.id === book.id);
//     if (existingItem) {
//       // Item already in cart, update quantity
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.book.id === book.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         ),
//       };
//     } else {
//       // Add new item to cart
//       return {
//         ...state,
//         items: [...state.items, { book, quantity }],
//       };
//     }
//   }),
//   on(CartActions.removeFromCart, (state, { bookId }) => {
//     return {
//       ...state,
//       items: state.items.filter((item) => item.book.id !== bookId),
//     };
//   }),
//   on(CartActions.clearCart, () => initialState)
// );


// import { createReducer, on } from '@ngrx/store';
// import * as CartActions from 'src/app/store/cart/cart.action';
// import {Book } from 'src/app/models/book';

// export interface CartState {
//   items: Book[];
//   total: number;
// }

// export const initialState: CartState = {
//   items: [],
//   total: 0,
// };

// export const cartReducer = createReducer(
//   initialState,
//   on(CartActions.addToCartSuccess, (state, { book }) => ({
//     ...state,
//     items: [...state.items, book],
//     total: state.total + book.price,
//   })),
//   on(CartActions.removeFromCartSuccess, (state, { bookId }) => {
//     const updatedItems = state.items.filter((item) => item.id !== bookId);
//     const updatedTotal = updatedItems.reduce((total, item) => total + item.price, 0);
//     return {
//       ...state,
//       items: updatedItems,
//       total: updatedTotal,
//     };
//   }),
//   on(CartActions.clearCartSuccess, (state) => ({
//     ...state,
//     items: [],
//     total: 0,
//   }))
// );

import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.action';

export interface CartState {
  items: number[]; // Use an array of book IDs instead of actual Book objects
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { bookId }) => ({
    ...state,
    items: [...state.items, bookId], // Store book IDs in the cart
  })),
  on(CartActions.removeFromCart, (state, { bookId }) => ({
    ...state,
    items: state.items.filter((itemId) => itemId !== bookId), // Remove the book ID from the cart
  })),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);










