import { createReducer, on} from '@ngrx/store';
import {Book} from '../models/book';
import * as Actions from './book.action';

export interface BooksState{
    list: Book[];
    selectedBook: number;
}

export const initialState: BooksState={
    list: [],
    selectedBook:0,
};

export const booksReducer = createReducer(
    initialState,
    on(Actions.selectBook,(state,{ bookId })=>{
        return{
            ...state,
            selectedBook: bookId,
        };
    }),
    on(Actions.loadBooksSuccess,(state,{ books })=>{
        return{
            ...state,
            list: books,
        };
    })
);
