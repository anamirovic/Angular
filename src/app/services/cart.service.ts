import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  placeOrder(bookIds: string, userId: number): Observable<any> {
    const url = `${this.apiUrl}/purchases`; // Prilagodite putanju za postavljanje porudžbine
  
    // Kreirajte telo zahteva sa podacima o porudžbini
    const requestBody = {
      bookIds: bookIds,
      userId: userId,
      purchaseDate: new Date().toISOString(), // Trenutno vreme u ISO formatu
    };
    console.log('Telo zahteva za porudžbinu:', requestBody);
    return this.http.post(url, requestBody);
  }
   
}


