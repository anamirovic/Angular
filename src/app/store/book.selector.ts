import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Book } from '../models/book';

export const selectBooksFeature = createSelector(
  (state: AppState) => state.books,
  (books) => books
);

export const selectBooksList = createSelector(
    selectBooksFeature,
    (books) => books.list
  );

  export const selectSelectedBookId = createSelector(
    selectBooksFeature,
    (books) => books.selectedBook
  );
  
  export const selectSelectedBook = createSelector(
    selectBooksList,
    selectSelectedBookId,
    (books, bookId) => books.find((book) => book.id === bookId)
  );