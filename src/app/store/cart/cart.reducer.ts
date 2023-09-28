import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.action';
import { Book } from 'src/app/models/book';

export interface CartState {
  items: Book[]; 
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { book }) => ({
    ...state,
    items: [...state.items, book], 
  })),
  on(CartActions.removeFromCart, (state, { bookId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== bookId),
  })),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);










