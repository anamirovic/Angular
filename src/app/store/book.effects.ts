import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BooksService } from '../services/books.service';
import * as BookActions from './book.action';

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
}
