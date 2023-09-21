import{ createAction, props } from '@ngrx/store';
import { Book, BookRating } from '../models/book';

export const loadBooks=createAction('Load Books');
export const loadBooksSuccess=createAction('Load Books Success',
props<{ books: Book[] }>()
);
export const selectBook=createAction(
    'Select a book',
    props<{bookId:number}>()
);

export const rateBook = createAction(
    'Rate a book',
     props<{ bookId: number; rating: BookRating }>()
);

export function rateSong(rateSong: any, arg1: (state: import("./book.reducer").BooksState, { songId, rating }: any) => import("./book.reducer").BooksState): import("@ngrx/store").ReducerTypes<import("./book.reducer").BooksState, readonly import("@ngrx/store").ActionCreator[]> {
    throw new Error('Function not implemented.');
}
      