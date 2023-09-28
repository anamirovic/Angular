// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
// import { CartService } from 'src/app/services/cart.service';
// import * as CartActions from 'src/app/store/cart/cart.action';

// @Injectable()
// export class CartEffects {
//   constructor(private actions$: Actions, private cartService: CartService) {}

//   addToCart$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.addToCart),
//       mergeMap((action) =>
//         this.cartService.addToCart(action.book).pipe(
//           map(() => CartActions.addToCartSuccess({ book: action.book })),
//           catchError(() => of({ type: 'load error' }))
//         )
//       )
//     )
//   );

//   removeFromCart$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.removeFromCart),
//       mergeMap((action) =>
//         this.cartService.removeFromCart(action.bookId).pipe(
//           map(() => CartActions.removeFromCartSuccess({ bookId: action.bookId })),
//           catchError(() => of({ type: 'load error' }))
//         )
//       )
//     )
//   );

//   clearCart$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.clearCart),
//       switchMap(() =>
//         this.cartService.clearCart().pipe(
//           map(() => CartActions.clearCartSuccess()),
//           catchError(() => of({ type: 'load error' }))
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CartActions from './cart.action';
import { CartService } from 'src/app/services/cart.service';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  placeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.placeOrder),
      switchMap(() =>
        this.cartService.placeOrder().pipe(
          map(() => CartActions.placeOrderSuccess()),
          catchError((error) => of(CartActions.placeOrderFailure({ error })))
        )
      )
    )
  );
}

