import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListadoComponent } from './components/movie-listado/movie-listado.component';
import { MovieDetallesComponent } from './components/movie-detalles/movie-detalles.component';
import { MovieComponent } from './components/movie/movie.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    MovieListadoComponent,
    MovieDetallesComponent,
    MovieComponent,
    BusquedaComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
