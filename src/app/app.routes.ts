import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { MostrarEmpleadosComponent } from './components/mostrar-empleados/mostrar-empleados.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mostrar', component: MostrarEmpleadosComponent },
  { path: 'empleado', component: EmpleadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
