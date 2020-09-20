import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from './mesa-class/mesa';
import {MesaService} from './mesa-service/mesa.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas:Mesa[];
  mesa:Mesa = new Mesa();

  constructor(private mesaService: MesaService,private router: Router ) { }

  ngOnInit(): void {
    this.listarMesas();
  }

  listarMesas():void{
    this.mesaService.getMesas().subscribe(
      mesas=>{this.mesas=mesas}
    )
  }
  
  nuevaMesa(){
    this.mesa= new Mesa();
  }

  crearMesa(){
    this.goto("/Mesas/form");
    this.mesaService.createMesa(this.mesa).subscribe(
      mesa=>{
        this.goto("../Mesas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: mesa.codigo + " creada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  obtenerMesa(id){
    this.mesaService.getMesa(id).subscribe(
      mesa => { this.mesa=mesa }
    )
  }

  actualizarMesa(){
    this.goto("/Mesas/form");
    this.mesaService.updateMesa(this.mesa).subscribe(
      mesa=>{
        this.goto("../Mesas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: mesa.codigo + " actualizada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  cambiarEstadoMesa(id){
    this.mesaService.getMesa(id).subscribe(
      mesa =>{
        this.mesa=mesa;
        if(this.mesa.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: Mesa ${this.mesa.codigo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Mesas/form")
                this.mesaService.updateEstadoMesa(this.mesa.id).subscribe(
                  mesa => {
                    this.goto("/Mesas");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.mesa.codigo} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Mesas");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: Mesa ${this.mesa.codigo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Mesas/form")
                this.mesaService.updateEstadoMesa(this.mesa.id).subscribe(
                  mesa => {
                    this.goto("/Mesas");
                    swal.fire(
                    'Habilitado!',
                    `${this.mesa.codigo} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Mesas");
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
