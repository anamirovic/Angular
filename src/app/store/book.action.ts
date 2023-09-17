import{ createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const loadBooks=createAction('Load Books');
export const loadBooksSuccess=createAction('Load Books Success',
props<{ books: Book[] }>()
);
export const selectBook=createAction(
    'Select a book',
    props<{bookId:number}>()
    );