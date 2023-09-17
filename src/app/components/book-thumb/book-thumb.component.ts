import {Component, Input, Output,EventEmitter,OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-thumb',
  templateUrl: './book-thumb.component.html',
  styleUrls: ['./book-thumb.component.scss']
})
export class BookThumbComponent implements OnInit {
  @Input() book: Book | null=null;
  @Output() onClick: EventEmitter<Book>=new EventEmitter<Book>();

  constructor(){

  }

  ngOnInit(): void{

  }
  
  clicked(){
    if(this.book){
      this.onClick.emit(this.book);
    }
  }
}
