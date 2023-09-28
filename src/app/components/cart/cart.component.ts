// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import * as CartActions from 'src/app/store/cart/cart.action';
// import * as CartSelectors from 'src/app/store/cart/cart.selector';
// import { AppState } from 'src/app/app.state';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
// })
// export class CartComponent {
//   cartItems$: Observable<number[]>;

//   constructor(private store: Store<AppState>) {
//     this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
//   }

//   addToCart(bookId: number) {
//     this.store.dispatch(CartActions.addToCart({ bookId: bookId }));
//   }

//   placeOrder() {
//     this.store.dispatch(CartActions.placeOrder());
//   }

//   // Define the removeFromCart method
//   removeFromCart(bookId: number) {
//     this.store.dispatch(CartActions.removeFromCart({ bookId: bookId }));
//   }
// }

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartActions from 'src/app/store/cart/cart.action';
import * as CartSelectors from 'src/app/store/cart/cart.selector';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems$: Observable<number[]>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
  }

  // Dodajte funkciju za dodavanje knjige u korpu
  addToCart(bookId: number) {
    this.store.dispatch(CartActions.addToCart({ bookId: bookId }));
  }

  placeOrder() {
    this.store.dispatch(CartActions.placeOrder());
  }

  // Define the removeFromCart method
  removeFromCart(bookId: number) {
    this.store.dispatch(CartActions.removeFromCart({ bookId: bookId }));
  }
}
