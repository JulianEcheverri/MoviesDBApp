import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// JSONP o JSON con padding es una técnica de comunicación utilizada en los programas JavaScript 
// para realizar llamadas asíncronas a dominios diferentes. JSONP es un método concebido para suplir la limitación de AJAX entre dominios, 
// que únicamente permite realizar peticiones a páginas que se encuentran bajo el mismo dominio y puerto por razones de seguridad.
// para usar en angular ---> npm install @angular/http@latest

export class MovieService {
  // api key generada por la pagina
  private apiKey: string = "975e746e05a3a811c29ac8878cea0e22";
  // api request
  private urlMovieDB: string = "https://api.themoviedb.org/3"

  constructor(private http: HttpClient) { }

  obtenerPeliculas(url: string) {
    return this.http.get(url).pipe(
      map((resp: any) => resp.results)
    );
  }

  obtenerEnCartelera() {
    let fechaActual = new Date();
    let otraFecha = new Date(new Date().setDate(fechaActual.getDate() - 10));
    let url = `${this.urlMovieDB}/discover/movie?api_key=${this.apiKey}&language=es&page=1&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_date.gte=${otraFecha.toISOString().split('T')[0]}&primary_release_date.lte=${fechaActual.toISOString().split('T')[0]}`;
    return this.obtenerPeliculas(url);
  }

  obtenerPopulares(generos: string = '') {
    let url = `${this.urlMovieDB}/discover/movie?api_key=${this.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${generos}`;
    return this.obtenerPeliculas(url);
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDB}/search/movie?api_key=${this.apiKey}&language=es&query=${texto}&page=1&include_adult=false`;
    return this.obtenerPeliculas(url);
  }

}

// {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     },
//     {
//       "id": 10402,
//       "name": "Music"
//     },
//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     },
//     {
//       "id": 37,
//       "name": "Western"
//     }
//   ]
// }

// {
//   "id": 10762,
//   "name": "Kids"
// },