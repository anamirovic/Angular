// import { createSelector } from '@ngrx/store';
// import { AppState } from 'src/app/app.state';

// export const selectCartFeature = createSelector(
//   (state: AppState) => state.cart,
//   (cart) => cart
// );

// export const selectCartItems = createSelector(
//   selectCartFeature,
//   (cart) => cart.items
// );

// export const selectCartTotal = createSelector(
//   selectCartFeature,
//   (cart) => cart.total
// );

import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CartState } from './cart.reducer';

export const selectCartFeature = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  selectCartFeature,
  (cart) => cart.items
);

