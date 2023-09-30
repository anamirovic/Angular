
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';

// import * as CartActions from './cart.action';
// import { CartService } from 'src/app/services/cart.service';

// @Injectable()
// export class CartEffects {

//   constructor(private actions$: Actions, private cartService: CartService) {}

//   // Effect to place an order
//   placeOrder$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.placeOrder),
//       mergeMap((action) =>
//         this.cartService.performOrder(action.bookId, action.userId).pipe(
//           map(() => CartActions.placeOrderSuccess()),
//           catchError((error) => of(CartActions.placeOrderFailure({ error: error.message })))
//         )
//       )
//     )
//   );
//   }


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as CartActions from './cart.action';
import { CartService } from 'src/app/services/cart.service';

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions, private cartService: CartService) {}

  // Effect za postavljanje narudžbine za svaku knjigu u korpi
  placeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.placeOrder),
      mergeMap((action) =>
        this.cartService.placeOrder(action.bookIds, action.userId).pipe(
          map(() => CartActions.placeOrderSuccess()),
          catchError((error) => of(CartActions.placeOrderFailure({ error: error.message })))
        )
      )
    )
  );

}
