import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListadoComponent } from './components/movie-listado/movie-listado.component';
import { MovieDetallesComponent } from './components/movie-detalles/movie-detalles.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-listado', component: MovieListadoComponent },
  { path: 'movie-detalles/:id/:desdelistado', component: MovieDetallesComponent },
  { path: 'movie-detalles/:id/:desdelistado/:busqueda', component: MovieDetallesComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'busqueda/:texto', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
