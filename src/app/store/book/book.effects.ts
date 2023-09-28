import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom, concatMap } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import * as BookActions from './book.action';
import { CartService } from 'src/app/services/cart.service';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'; 

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() =>
        this.booksService.getAll().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );

//   addToCart$ = createEffect(() =>
//     this.actions$.pipe(
//         ofType(BookActions.addToCart),
//         // Pozovite odgovarajući servis za dodavanje u korpu
//         // Ažurirajte dostupne kopije knjige
//         map(({ book }) => BookActions.updateAvailableCopies({ bookId: book.id, availableCopies: book.available - 1 })),
//         catchError(() => of({ type: 'add to cart error' }))
//     )
// );

// // Efekat za narudžbu
// order$ = createEffect(() =>
//     this.actions$.pipe(
//         ofType(BookActions.order),
//         // Pozovite odgovarajući servis za narudžbu
//         catchError(() => of({ type: 'order error' }))
//     )
// );

// // Efekat za otkazivanje narudžbe
// cancelOrder$ = createEffect(() =>
//     this.actions$.pipe(
//         ofType(BookActions.cancelOrder),
//         // Pozovite odgovarajući servis za otkazivanje narudžbe
//         catchError(() => of({ type: 'cancel order error' }))
//     )
//);

  

}
