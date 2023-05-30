import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {  
  // private url: string = environment.host;  
  private url: string = "https://rickandmortyapi.com/api";
  
  constructor(private http:HttpClient) {    
  }

  list() {    
    return this.http.get<any[]>(`${this.url}/character` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }
}

