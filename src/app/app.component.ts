import { Component } from '@angular/core';
import { MovieServiceService } from './providers/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesDBApp';

  constructor(public moviesv : MovieServiceService){
    this.moviesv.obtenerPopulares().subscribe(data => console.log(data));
  }
}
