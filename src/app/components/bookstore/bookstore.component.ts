import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { loadBooks, selectBook } from 'src/app/store/book.action';
import { BooksState } from 'src/app/store/book.reducer';
import { selectBooksList } from 'src/app/store/book.selector';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {
  
  book$: Observable<Book[]>=of([]);

  title="mnogo dobre knjige";

  constructor(private store: Store<AppState>){}

  ngOnInit(): void{
    this.store.dispatch(loadBooks());
    this.book$ = this.store.select(selectBooksList);
   // this.book$=this.booksService.getAll();

  }

  selectBook(book: Book){
    //console.log('Selektovana knjiga: ', book);
    this.store.dispatch(
      selectBook({
        bookId: book.id,
      })
    );
  }

}
