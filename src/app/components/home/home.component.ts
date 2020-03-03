import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/providers/movie-service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesPopulares: Movie[];
  moviesPopularesInfantiles: Movie[] = [];
  moviesEnCartelera: Movie[] = [];

  constructor(private ms: MovieService) {
    this.ms.obtenerEnCartelera().subscribe((data: any[]) => this.moviesEnCartelera = data);
    this.ms.obtenerPopulares().subscribe((data: any[]) => this.moviesPopulares = data);
    this.ms.obtenerPopulares('16').subscribe((data: any[]) => this.moviesPopularesInfantiles = data); //10751  
    
  }

  ngOnInit(): void {
    
  }

}
