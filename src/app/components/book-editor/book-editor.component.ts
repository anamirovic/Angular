import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Book, BookRating } from 'src/app/models/book';
import { rateBook } from 'src/app/store/book.action';
import { BooksState } from 'src/app/store/book.reducer';
import { selectBooksFeature, selectSelectedBook } from 'src/app/store/book.selector';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {

  private _book: Book | null = null;
  
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
      "viewsCount": 950,
      "imageurl":"../../../assets/the_shining.jpg",
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
}
