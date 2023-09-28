import {BooksState} from './store/book/book.reducer';
import { CartState } from './store/cart/cart.reducer';

export interface AppState{
    books: BooksState;
    cart: CartState;
}