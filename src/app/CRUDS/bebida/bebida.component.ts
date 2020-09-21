import { Component, OnInit } from '@angular/core';
import {Bebida} from './bebida-class/bebida';
import {BebidaService} from './bebida-service/bebida.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  bebidas:Bebida[];
  bebida:Bebida = new Bebida();

  constructor(private bebidaService:BebidaService,private router:Router) { }

  ngOnInit(): void {
    this.listarBebidas();
  }

  listarBebidas(){
    this.bebidaService.getBebidas().subscribe(
      bebidas=>{this.bebidas=bebidas}
    )
  }

  nuevaBebida(){
    this.bebida = new Bebida();
  }

  obtenerBebida(id){
    this.bebidaService.getBebida(id).subscribe(
      bebida => { this.bebida=bebida }
    )
  }

  crearBebida(){
    this.goto("/Bebidas/form");
    this.bebidaService.createBebida(this.bebida).subscribe(
      bebida =>{
        this.goto("../Bebidas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: bebida.nombre + " creada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  actualizarBebida(){
    this.goto("/Bebidas/form");
    this.bebidaService.updateBebida(this.bebida).subscribe(
      bebida=>{
        this.goto("../Bebidas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: bebida.nombre + " actualizada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }
 //FIX: PASAR BEBIDA EN VEZ DE ID
  cambiarEstadoBebida(id){
    this.bebidaService.getBebida(id).subscribe(
      bebida =>{
        this.bebida=bebida;
        if(this.bebida.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.bebida.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Bebidas/form")
                this.bebidaService.updateEstadoBebida(this.bebida.id).subscribe(
                  bebida => {
                    this.goto("/Bebidas");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.bebida.nombre} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Bebidas");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.bebida.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Bebidas/form")
                this.bebidaService.updateEstadoBebida(this.bebida.id).subscribe(
                  mesa => {
                    this.goto("/Bebidas");
                    swal.fire(
                    'Habilitado!',
                    `${this.bebida.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Bebidas");
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
