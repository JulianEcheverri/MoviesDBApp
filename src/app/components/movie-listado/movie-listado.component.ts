import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-listado',
  templateUrl: './movie-listado.component.html',
  styleUrls: ['./movie-listado.component.css']
})
export class MovieListadoComponent implements OnInit {
  @Input() tituloDeListado: string;
  @Input() listadoDePeliculas: Movie[];

  constructor() {
    

   }

  ngOnInit(): void {
  }
}
