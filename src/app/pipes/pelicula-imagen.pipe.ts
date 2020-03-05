import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(movie: Movie): any {
    let url = 'https://image.tmdb.org/t/p/w500';
    if (movie.backdrop_path !== null) {
      return url + movie.backdrop_path; 
    }
    else if (movie.poster_path !== null) {
      return url + movie.poster_path;
    }
    else {
      return 'assets/default-img.gif';
    }
  }
}
