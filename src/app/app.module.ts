import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { BookThumbComponent } from './components/book-thumb/book-thumb.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/book/book.reducer';
import { BookEditorComponent } from './components/book-editor/book-editor.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/book/book.effects';
import { cartReducer } from './store/cart/cart.reducer';
import { CartComponent } from './components/cart/cart.component';
import { CartEffects } from './store/cart/cart.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    BookThumbComponent,
    BookEditorComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      books:booksReducer,
      cart: cartReducer,}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([BooksEffects, CartEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
