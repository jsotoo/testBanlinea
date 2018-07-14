import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

id:number;
name:string;

empleados: any[] = [];

mostrarDatos:boolean;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

buscar(termino:any){
  this.id = termino;
  this.mostrarDatos = false;

}

obtenerEmpleado(){
  this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${this.id}` )
  .subscribe((data:any[])=>{

    this.mostrarDatos = true;
    this.empleados = data;
    
    console.log(data)

}
);
};
}
