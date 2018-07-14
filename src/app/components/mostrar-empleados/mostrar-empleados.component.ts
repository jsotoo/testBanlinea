import { Component, OnInit } from '@angular/core';
import {empleadosService} from '../../services/empleados.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mostrar-empleados',
  templateUrl: './mostrar-empleados.component.html',
  styleUrls: ['./mostrar-empleados.component.css']
})
export class MostrarEmpleadosComponent implements OnInit {



  empleados: any[] = [];



  constructor(private http: HttpClient) {
    console.log("hola");
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resp: any) => {
      this.empleados = resp;
      console.log(resp);
    });
  }

  ngOnInit() {
  }

}
