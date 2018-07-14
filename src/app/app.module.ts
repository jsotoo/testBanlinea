import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
//Rutas
import {APP_ROUTING} from './app.Routes';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MostrarEmpleadosComponent } from './components/mostrar-empleados/mostrar-empleados.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MostrarEmpleadosComponent,
    EmpleadosComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
