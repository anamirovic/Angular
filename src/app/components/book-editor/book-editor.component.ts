import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Book, BookRating } from 'src/app/models/book';
import { rateBook } from 'src/app/store/book/book.action';
import * as CartActions from 'src/app/store/cart/cart.action';
//import { BooksState } from 'src/app/store/book.reducer';
import { selectBooksFeature, selectSelectedBook } from 'src/app/store/book/book.selector';
import { addToCart } from 'src/app/store/cart/cart.action';


@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {

  //private _book: Book | null = null;
  @Input() _book: Book | null = null;
  @Output() addToCartClicked: EventEmitter<number> = new EventEmitter<number>();
  
  //selectedBook:number=0;

  // @Input()
  // set book(value){
  //   this._book=value;
    
  // }

  @Input()
  set book(value) {
    this._book = value;
  }

  get book()
  {
    return this._book;
  }

  constructor(private store: Store<AppState>){ 

    this.book=
    {
      "id": 10,
      "title": "The Shining",
      "author": "Stephen King",
      "price": 12,
      "available": 950,
      "imageurl":"../../../assets/the_shining.jpg",
      "purchased": false,
      rating:BookRating.None,
    };
  }

  

  ngOnInit(): void {
    this.store.select(selectSelectedBook)
     .subscribe((book)=>{
      if(book)
      {
        this.book=book; 
      }
     
    });
    
  }

  selectBook(book:Book){
    console.log('Selektovana knjiga je ', book);

  }

  rating(): string {
    if (this.book) {
      switch (this.book.rating) {
        case BookRating.Like:
          return '+';
        case BookRating.Dislike:
          return '-';
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  like() {
    if (this.book) {
      this.store.dispatch(
        rateBook({
          bookId: this.book.id,
          rating: BookRating.Like,
        })
      );
    }
  }

  dislike() {
    if (this.book) {
      this.store.dispatch(
        rateBook({
          bookId: this.book.id,
          rating: BookRating.Dislike,
        })
      );
    }
  }

  addToCart() {
    if (this.book) {
      this.addToCartClicked.emit(this.book.id);
    }
  }


//   addToCart(book: Book) {
//     this.store.dispatch(addToCart({ book }));
// }

// order(book: Book) {
//     this.store.dispatch(order({ book }));
// }

// cancelOrder(book: Book) {
//     this.store.dispatch(cancelOrder({ book }));
// }
  // addToCart(book: Book) {
  //   this.store.dispatch(addToCart({ book }));
  // }


  // addToCart() {
  //   if (this.book) {
  //     console.log('Adding to cart:', this.book);
  //     this.store.dispatch(addToCart({ book: this.book }));
  //   }
  // }

  
  
}
