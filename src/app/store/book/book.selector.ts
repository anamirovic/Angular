import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';

export const selectBooksFeature = createSelector(
  (state: AppState) => state.books,
  (books) => books
);

export const selectBookIds = createSelector(
    selectBooksFeature,
    (books) => books.ids
  );

  export const selectBooksList = createSelector(selectBooksFeature, (books) =>
  books.ids
    .map((id) => books.entities[id])
    .filter((book) => book != null)
    .map((book) => <Book>book)
);

  export const selectSelectedBookId = createSelector(
    selectBooksFeature,
    (books) => books.selectedBook
  );
  
  export const selectSelectedBook = createSelector(
    selectBooksFeature,
    selectSelectedBookId,
    (books, bookId) => books.entities[bookId]
  );

  export const selectCartFeature = createSelector(
    (state: AppState) => state.books,
    (books) => books
);

export const selectCart = createSelector(
    selectCartFeature,
    (books) =>
        books.ids
            .map((id) => books.entities[id])
            .filter((book) => book != null)
            .map((book) => <Book>book)
);