import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  buscar: string = "";

  constructor(public ms: MovieService, public route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      // console.log(parametros);
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit(): void {
  }

  buscarPelicula() {
    if (this.buscar.length == 0) return;
    this.ms.buscarPelicula(this.buscar).subscribe();
  }
}
