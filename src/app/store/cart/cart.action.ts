// import { createAction, props } from '@ngrx/store';
// import { Book } from '../../models/book';

// export const addToCart = createAction(
//   'Add to Cart',
//   props<{ book: Book }>()
// );

// export const removeFromCart = createAction(
//   'Remove from Cart',
//   props<{ bookId: number }>()
// );

// export const clearCart = createAction('Clear Cart');



// import { createAction, props } from '@ngrx/store';
// import { Book } from '../../models/book';

// export const addToCart = createAction(
//   'Add to Cart',
//   props<{ book: Book }>()
// );

// export const removeFromCart = createAction(
//   'Remove from Cart',
//   props<{ bookId: number }>()
// );

// export const clearCart = createAction('Clear Cart');

// export const addToCartSuccess = createAction(
//   'Add to Cart Success',
//   props<{ book: Book }>()
// );

// export const removeFromCartSuccess = createAction(
//   'Remove from Cart Success',
//   props<{ bookId: number }>()
// );

// export const clearCartSuccess = createAction('Clear Cart Success');

import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book';

export const addToCart = createAction('Add to Cart', props<{ bookId: number }>());
export const removeFromCart = createAction('Remove from Cart', props<{ bookId: number }>());
export const clearCart = createAction('Clear Cart');
export const placeOrder = createAction('Place Order');
export const placeOrderSuccess = createAction('Place Order Success');
export const placeOrderFailure = createAction('Place Order Failure', props<{ error: string }>());



