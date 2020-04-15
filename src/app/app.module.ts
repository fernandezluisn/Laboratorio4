import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import {AlumnoComponent} from './componentes/alumno/alumno.component';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { DetalleAlumnosComponent } from './componentes/detalle-alumnos/detalle-alumnos.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';
import { ListadoProfesorComponent } from './componentes/listado-profesor/listado-profesor.component';
import { TablaProfesorComponent } from './componentes/tabla-profesor/tabla-profesor.component';
import { FilaProfesorComponent } from './componentes/fila-profesor/fila-profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    ListadoAlumnosComponent,
    DetalleAlumnosComponent, 
    ProfesorComponent,
    DetalleProfesorComponent,
    ListadoProfesorComponent,
    TablaProfesorComponent,
    FilaProfesorComponent, 
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  FormsModule,
   AppRoutingModule  ],
   exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
