import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../providers/movie-service';

@Component({
  selector: 'app-movie-detalles',
  templateUrl: './movie-detalles.component.html',
  styleUrls: ['./movie-detalles.component.css']
})
export class MovieDetallesComponent implements OnInit {
  movie: any = {};
  desdeListado: any;
  busqueda: any;

  constructor(private activatedRoute: ActivatedRoute, private ms: MovieService) {
    this.activatedRoute.params.subscribe(params => {     
      this.ms.obtenerPelicula(params.id).subscribe(data => {
        this.movie = data
        //console.log(this.movie);
      });
      console.log(params);
      this.desdeListado = params['desdelistado'];
      this.busqueda = params['busqueda'];
    });
   }

  ngOnInit(): void {
  }

}
