import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book';

export const addToCart = createAction('Add to Cart', props<{ book:Book }>());
//export const addToCartSuccess = createAction('Add to Cart Success', props<{ book:Book }>());
export const removeFromCart = createAction('Remove from Cart', props<{ bookId: number }>());
//export const removeFromCartSuccess = createAction('Remove from Cart Success', props<{ bookId: number }>());
export const clearCart = createAction('Clear Cart');
//export const clearCartSuccess = createAction('Clear Cart Success');
export const placeOrder = createAction('Place Order');
export const placeOrderSuccess = createAction('Place Order Success');
export const placeOrderFailure = createAction('Place Order Failure', props<{ error: string }>());



