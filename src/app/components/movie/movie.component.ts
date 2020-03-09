import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  @Input() componentePadre: any;
  @Input() busqueda: string = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDetallesDePelicula(id: string){
    this.router.navigate(['/movie-detalles', id, this.componentePadre.constructor.name == 'MovieListadoComponent', this.busqueda]);
  }
}
