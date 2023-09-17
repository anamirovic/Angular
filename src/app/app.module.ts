import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { BookThumbComponent } from './components/book-thumb/book-thumb.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/book.reducer';
import { BookEditorComponent } from './components/book-editor/book-editor.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    BookThumbComponent,
    BookEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({books:booksReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([BooksEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
