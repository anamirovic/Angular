// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of, tap } from 'rxjs';
// import { Book } from '../models/book';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: Book[] = [];
//   private cartSubject = new BehaviorSubject<Book[]>([]);

//   constructor() {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       this.cartItems = JSON.parse(storedCart);
//       this.cartSubject.next(this.cartItems);
//     }
//    }

// // Getter za observable kojeg možete koristiti za praćenje promjena u košarici
// get cart$(): Observable<Book[]> {
//   return this.cartSubject.asObservable();
// }

// addToCart(book: Book): Observable<void> {
//   this.cartItems.push(book);
//   this.cartSubject.next(this.cartItems);
//   this.saveCartToLocalStorage();
//   return of(undefined).pipe(tap(() => {})); // Vraća Observable<void>
// }

// removeFromCart(bookId: number): Observable<void> {
//   // Izradi Observable koji će emitirati rezultat nakon uklanjanja knjige iz košarice
//   return new Observable<void>((observer) => {
//     this.cartItems = this.cartItems.filter((book) => book.id !== bookId);
//     this.cartSubject.next(this.cartItems);
//     this.saveCartToLocalStorage();
//     observer.next(); // Emitiraj signal da je operacija završena
//     observer.complete(); // Završi Observable
//   });
// }

// clearCart(): Observable<void> {
//   this.cartItems = [];
//   this.cartSubject.next(this.cartItems);
//   this.saveCartToLocalStorage();
//   return of(undefined).pipe(tap(() => {})); // Vraća Observable<void>
// }

// // Pomoćna metoda za spremanje košarice u lokalno skladište
// private saveCartToLocalStorage(): void {
//   localStorage.setItem('cart', JSON.stringify(this.cartItems));
// }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  // Add a book to the cart
  addToCart(bookId: number): Observable<any> {
    const url = environment.api+"/books"; // Replace with the actual API endpoint for adding to the cart
    const body = { bookId }; // Assuming your API expects bookId in the request body

    return this.httpClient.post(url, body); // Send a POST request to add the book to the cart
  }

  // Place an order
   // Place an order
   placeOrder(): Observable<any> {
    const url = environment.api+"/books"; // Replace with the actual API endpoint for placing an order

    return this.httpClient.post(url, {}); // Send a POST request to place the order (empty body if not needed)
  }
}
