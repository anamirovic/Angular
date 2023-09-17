import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
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
      "link": "7GjOOyBoELw",
      "imageurl":"../../../assets/the_shining.jpg"
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

  // rating(): string {
  //   if (this.song) {
  //     switch (this.song.rating) {
  //       case SongRating.Like:
  //         return '+';
  //       case SongRating.Dislike:
  //         return '-';
  //       default:
  //         return '';
  //     }
  //   } else {
  //     return '';
  //   }
  // }

  // like() {
  //   if (this.song) {
  //     this.store.dispatch(
  //       rateSong({
  //         songId: this.song.id,
  //         rating: SongRating.Like,
  //       })
  //     );
  //   }
  // }

  // dislike() {
  //   if (this.song) {
  //     this.store.dispatch(
  //       rateSong({
  //         songId: this.song.id,
  //         rating: SongRating.Dislike,
  //       })
  //     );
  //   }
  // }
}
