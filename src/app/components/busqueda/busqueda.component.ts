import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie-service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  buscar: string = "";

  constructor(public ms: MovieService) { }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if (this.buscar.length == 0) return;
    this.ms.buscarPelicula(this.buscar).subscribe();
  }


}
