import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartItemCount, selectTotalCartPrice } from 'src/app/store/cart/cart.selector'; 
import * as CartActions from 'src/app/store/cart/cart.action'; 
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { CartService } from 'src/app/services/cart.service';
import { switchMap, take } from 'rxjs/operators';
import { selectBookIds } from 'src/app/store/book/book.selector';
import { Role } from 'src/app/models/user';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartItems);
  cartItemCount$ = this.store.select(selectCartItemCount);
  totalCartPrice$ = this.store.select(selectTotalCartPrice);


  // Dodajte Reactive Form kontrolere
  orderForm: FormGroup;
  username: string = '';
  password: string = '';
 

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private cartService: CartService) {
    // Kreirajte Reactive Form model
    this.orderForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  removeFromCart(item: Book) {
    this.store.dispatch(CartActions.removeFromCart({ bookId: item.id }));
  }

  //orderPlaced = false;

  // Promenite funkciju placeOrder da biste koristili Reactive Form podatke
  placeOrder1(username: string, password: string) {
    console.log("Username:", username);
    console.log("Password:", password);

    if (username && password) {
      const loginData = {
        username: username,
        password: password,
      };

      // Preuzmite ID-jeve knjiga iz korpe
      this.cartItems$.pipe(take(1)).subscribe((cartItems) => {
        const bookIds = cartItems.map((item) => item.id);

        // Pretvorite niz ID-jeva u string
        const bookIdsString = bookIds.join(',');

        

        // Nastavite sa fetch za autentifikaciju i naručivanjem
        fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
            
              //if (!this.orderPlaced) {
                // Ako je autentifikacija uspela, pozovite funkciju za naručivanje
                console.log(data);
                fetch('http://localhost:3000/profile', {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${data.access_token}`,
                    'Content-Type': 'application/json',
                  }
                }).then((response) => response.json())
                  .then((userData) => {
                    console.log(userData);
                    const userId = userData.userId;
                    
                    // Prosledite bookIdsString funkciji performOrder umesto pojedinačnih ID-jeva
                    this.cartService.placeOrder(bookIdsString, userId).subscribe((response) => {
                      // Obrada odgovora nakon što je narudžbina izvršena
                     // this.orderPlaced = true;
                     console.log(userData.role);
                     if (userData.role === Role.Vip) {
                      alert('Order successful. You have free delivery as a VIP member!');
                    } else {
                      alert('Order successful.');
                    }
                    });
                  });
              //}
            } else {
              alert('Login failed. Please try again.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
          });
      });
    } else {
      alert('Please fill in both username and password fields.');
    }
  }
}


  // performOrder(userId: number) {
  //   this.store.select(selectCartItems).pipe(
  //     take(1), // Uzmi samo jednom
  //     switchMap((cartItems: Book[]) => {
  //       const bookIds: number[] = cartItems.map((item) => item.id); 
  //       console.log('bookIds',bookIds);
  //       console.log('userId', userId);
  //       return this.cartService.performOrder(bookIds, userId);
  //     })
  //   ).subscribe(
  //     (response) => {
  //       console.log('Order placed successfully:', response);
  //       this.store.dispatch(CartActions.clearCart());
  //       alert('Order placed successfully!');
  //     },
  //     (error) => {
  //       console.error('Error placing order:', error);
  //       alert('An error occurred while placing your order.');
  //     }
  //   );
  // }
  
//  performOrder(userId: number) {
//   this.store.select(selectCartItems).subscribe((cartItems: Book[]) => {
//     const bookIds: number[] = cartItems.map((item) => item.id); 
//     this.cartService.performOrder(bookIds, userId).subscribe(
//       (response) => {
//         console.log('Order placed successfully:', response);
//         this.store.dispatch(CartActions.clearCart());
//         alert('Order placed successfully!');
//       },
//       (error) => {
//         console.error('Error placing order:', error);
//         alert('An error occurred while placing your order.');
//       }
//     );
//   });
// }

  

 




