import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }

  ObtenerLibros(){
    return this.http.get('https://openlibrary.org/search.json?q=the+lord+of+the+rings');
  }

  ObtenerPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

}
