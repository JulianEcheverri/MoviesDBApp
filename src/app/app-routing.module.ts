import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListadoComponent } from './components/movie-listado/movie-listado.component';
import { MovieDetallesComponent } from './components/movie-detalles/movie-detalles.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-listado', component: MovieListadoComponent },
  { path: 'movie-detalles/:id', component: MovieDetallesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
