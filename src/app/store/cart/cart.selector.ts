import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';
import { AppState } from 'src/app/app.state';

// Prvo, kreirajte selektor za pristup stanju korpe
export const selectCartFeature = (state: AppState) => state.cart;

// Zatim, kreirajte selektore za specifične delove stanja korpe
export const selectCartItems = createSelector(
  selectCartFeature,
  (cart: CartState) => cart.items
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (items) => items.length
);

export const selectTotalCartPrice = createSelector(
  selectCartItems,
  (items) => {
    // Koristite reduce funkciju za sumiranje cena knjiga u korpi
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  }
);



