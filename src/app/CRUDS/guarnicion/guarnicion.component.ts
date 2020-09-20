import { Component, OnInit } from '@angular/core';
import {Guarnicion} from './guarnicion';
import {GuarnicionService} from './guarnicion.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {

  guarniciones:Guarnicion[];
  guarnicion:Guarnicion = new Guarnicion();

  constructor(private guarnicionService:GuarnicionService,private router: Router) { }

  ngOnInit(): void {
    this.listarGuarniciones();
  }

  listarGuarniciones(){
    this.guarnicionService.getGuarniciones().subscribe(
      guarniciones => {this.guarniciones= guarniciones}
    )
  }

  nuevaGuarnicion(){
    this.guarnicion= new Guarnicion();
  }

  obtenerGuarnicion(id){
    this.guarnicionService.getGuarnicion(id).subscribe(
      guarnicion => { this.guarnicion = guarnicion }
    )
  }

  actualizarGuarnicion(){
    this.goto("/Guarniciones/form");
    this.guarnicionService.updateGuarnicion(this.guarnicion).subscribe(
      guarnicion=>{
        this.goto("../Guarniciones");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: guarnicion.nombre + " actualizada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  crearGuarnicion(){
    this.goto("/Guarniciones/form");
    this.guarnicionService.createGuarnicion(this.guarnicion).subscribe(
      guarnicion=>{
        this.goto("../Guarniciones");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: guarnicion.nombre + " creada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  cambiarEstadoGuarnicion(id){
    this.guarnicionService.getGuarnicion(id).subscribe(
      guarnicion =>{
        this.guarnicion=guarnicion;
        if(this.guarnicion.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.guarnicion.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Guarniciones/form");
                this.guarnicionService.updateEstadoGuarnicion(guarnicion.id).subscribe(
                  guarnicion => {
                    this.goto("/Guarniciones");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.guarnicion.nombre} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Guarniciones");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.guarnicion.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/Guarniciones/form")
                this.guarnicionService.updateEstadoGuarnicion(this.guarnicion.id).subscribe(
                  guarnicion => {
                    this.goto("/Guarniciones");
                    swal.fire(
                    'Habilitado!',
                    `${this.guarnicion.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../Guarniciones");
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
