import { createReducer, on} from '@ngrx/store';
import {Book} from 'src/app/models/book';
import * as Actions from './book.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';


export interface BooksState extends EntityState<Book>{
    selectedBook: number;
}

// export interface BooksState2{
//     ids: string[],
//     entities:{},
//     selectedBook: number
// }

const adapter = createEntityAdapter<Book>();

export const initialState: BooksState = adapter.getInitialState({
  selectedBook: 0,
});

export const booksReducer = createReducer(
    initialState,
    on(Actions.selectBook,(state,{ bookId })=>{
        return{
            ...state,
            selectedBook: bookId,
        };
    }),
    on(Actions.loadBooksSuccess,(state,{ books })=>
        adapter.setAll(books,state)
    ),
    on(Actions.rateBook, (state, { bookId, rating }) =>
    adapter.updateOne(
      {
        id: bookId,
        changes: {
          rating,
        },
      },
      state
    )
    )

    // on(Actions.addToCart, (state, { book }) =>
    //     adapter.updateOne(
    //         {
    //             id: book.id,
    //             changes: {
    //                 available: book.available - 1,
    //             },
    //         },
    //         state
    //     )
    // ),

    // on(Actions.order, (state, { book }) =>
    //     adapter.updateOne(
    //         {
    //             id: book.id,
    //             changes: {
    //                 available: book.available - 1,
    //             },
    //         },
    //         state
    //     )
    // ),

    // on(Actions.cancelOrder, (state, { book }) =>
    //     adapter.updateOne(
    //         {
    //             id: book.id,
    //             changes: {
    //                 available: book.available + 1,
    //             },
    //         },
    //         state
    //     )
    // )
);
  

