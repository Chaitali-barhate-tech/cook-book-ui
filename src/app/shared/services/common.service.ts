import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000';

  getRecipiesList(page: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/recipes/short?p=${page}`);
  }

  getRecipieDetails(id: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/recipes/details/${id}`);
  }

  getRecipesbyCountry(page: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/recipes/countries?p=${page}`);
  }

  getRecipesbyAuthor(page: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/recipes/authors?p=${page}`);
  }

}
