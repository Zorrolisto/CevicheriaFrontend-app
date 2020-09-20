import { Component, OnInit } from '@angular/core';
import {Plato} from './plato-class/plato';
import {PlatoService} from './plato-service/plato.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  platos:Plato[];
  plato:Plato = new Plato();

  constructor(private platoService: PlatoService, private router:Router) { }

  ngOnInit(): void {
    this.listarPlatos();
  }

  listarPlatos(){
    this.platoService.getPlatos().subscribe(
      platos => {this.platos = platos}
    )
  }

  nuevoPlato(){
    this.plato= new Plato();
  }

  obtenerPlato(id){
    this.platoService.getPlato(id).subscribe(
      plato => { this.plato=plato }
    )
  }

  actualizarPlato(){
    this.goto("/Platos/form");
    this.platoService.updatePlato(this.plato).subscribe(
      plato=>{
        this.goto("../Platos");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: plato.nombre + " actualizado con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  crearBebida(){
    this.goto("/Platos/form");
    this.platoService.createPlato(this.plato).subscribe(
      plato =>{
        this.goto("../Platos");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: plato.nombre + " creado con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  cambiarEstadoPlato(id){
    this.platoService.getPlato(id).subscribe(
      plato =>{
        this.plato=plato;
        if(this.plato.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.plato.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Platos/form")
                this.platoService.updateEstadoPlato(this.plato.id).subscribe(
                  plato => {
                    this.goto("/Platos");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.plato.nombre} deshabilitado con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Platos");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.plato.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Platos/form")
                this.platoService.updateEstadoPlato(this.plato.id).subscribe(
                  mesa => {
                    this.goto("/Platos");
                    swal.fire(
                    'Habilitado!',
                    `${this.plato.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Platos");
              }
  
            })
        }
      });
  }

  public goto(url){
    this.router.navigate([url]).then((e) =>{
      if(e){
        console.log("Navigation is successful!");
      }else{
        console.log("Navigation has failed!");
      }
    });
  }

}
