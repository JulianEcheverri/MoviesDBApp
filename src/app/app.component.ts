import { Component } from '@angular/core';
import { MovieService } from './providers/movie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesDBApp';

  constructor(public moviesv : MovieService){
     
    // this.moviesv.obtenerPopulares('10751').subscribe(data => console.log(data));

  }
}
