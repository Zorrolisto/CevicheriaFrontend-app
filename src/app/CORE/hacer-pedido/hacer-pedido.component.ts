import { Component, OnInit, Inject } from '@angular/core';  
import {ActivatedRoute, Router} from '@angular/router';
import { BebidaService } from 'src/app/CRUDS/bebida/bebida-service/bebida.service';
import { GuarnicionService } from 'src/app/CRUDS/guarnicion/guarnicion-service/guarnicion.service';
import { PlatoService } from 'src/app/CRUDS/plato/plato-service/plato.service';
import { PedidoService } from 'src/app/CRUDS/pedido/pedido-service/pedido.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBebidasComponent } from './dialog-bebidas/dialog-bebidas.component';
import { DialogPlatosComponent } from './dialog-platos/dialog-platos.component';
import { DialogGuarnicionesComponent } from './dialog-guarniciones/dialog-guarniciones.component';

import swal from 'sweetalert2'; 

import { LineaDeBebida } from 'src/app/CRUDS/pedido/pedido-class/linea-de-bebida-class/linea-de-bebida';
import { LineaDePlato } from 'src/app/CRUDS/pedido/pedido-class/linea-de-plato-class/linea-de-plato';
import { LineaDeGuarnicion } from 'src/app/CRUDS/pedido/pedido-class/linea-de-guarnicion-class/linea-de-guarnicion';
import { Pedido } from 'src/app/CRUDS/pedido/pedido-class/pedido';
import { DialogEditarPedidoComponent } from './dialog-editar-pedido/dialog-editar-pedido.component';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.css']
})
export class HacerPedidoComponent implements OnInit {
  
  Pedido: Pedido; 

  constructor(private bebidaService:BebidaService,
              private platoService:PlatoService,
              private guarnicionService:GuarnicionService,
              private pedidoService:PedidoService,
              public dialog: MatDialog,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPedido();
  }

  public cargarPedido(): void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){ //Si existe id
        this.pedidoService.getPedido(id).subscribe(
            (pedido)=> this.Pedido = pedido)
      } 
    })
  }

  //LINEA DE BEBIDAS
  openDialogBebidas(): void {
    const dialogRef = this.dialog.open(DialogBebidasComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => { 
      if(result!=null){
        if(this.Pedido.lineaDeBebidas==null){ 
          this.Pedido.lineaDeBebidas = [new LineaDeBebida()];
          this.Pedido.lineaDeBebidas.pop();
        }
          this.Pedido.lineaDeBebidas.push(result);
          this.Pedido.precioTotal = this.Pedido.precioTotal + result.bebida.precio * result.cantidad;
      }
    });
  }
  abrirDialogParaEditarBebida(lineaDeBebidaParaEditar:LineaDeBebida){ 
    let precio = lineaDeBebidaParaEditar.bebida.precio;
    let cantidad = lineaDeBebidaParaEditar.cantidad; 
    let bebida = lineaDeBebidaParaEditar.bebida;
    let temperatura = lineaDeBebidaParaEditar.temperatura;
    const dialogRef = this.dialog.open(DialogBebidasComponent, {
      width: '500px',
      data: lineaDeBebidaParaEditar,
    }); 
    dialogRef.afterClosed().subscribe(result => { 
      if(precio!=result.bebida.precio || cantidad!=result.cantidad){
        this.Pedido.precioTotal = this.Pedido.precioTotal - precio * cantidad;
        this.Pedido.precioTotal = this.Pedido.precioTotal + result.bebida.precio * result.cantidad;
      }
    });
  }
  eliminarBebida(lineaDeBebidaParaEliminar:LineaDeBebida){
    for(let linea of this.Pedido.lineaDeBebidas){
      if(linea.bebida.id == lineaDeBebidaParaEliminar.bebida.id &&
        linea.cantidad == lineaDeBebidaParaEliminar.cantidad &&
        linea.temperatura == lineaDeBebidaParaEliminar.temperatura){
          this.Pedido.lineaDeBebidas = this.Pedido.lineaDeBebidas.filter(
            ldb => ldb !== linea
          );
      }
    } 
    this.Pedido.precioTotal = this.Pedido.precioTotal - lineaDeBebidaParaEliminar.bebida.precio * lineaDeBebidaParaEliminar.cantidad;
  }

  
  //LINEA DE PLATOS
  openDialogPlatos(): void {
    const dialogRef = this.dialog.open(DialogPlatosComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => { 
      if(result!=null){
        if(this.Pedido.lineaDePlatos==null){ 
          this.Pedido.lineaDePlatos = [new LineaDePlato()];
          this.Pedido.lineaDePlatos.pop();
          this.Pedido.lineaDePlatos.push(result);
          this.Pedido.precioTotal = this.Pedido.precioTotal + result.plato.precio * result.cantidad;
        }else{
          this.Pedido.lineaDePlatos.push(result);
          this.Pedido.precioTotal = this.Pedido.precioTotal + result.plato.precio * result.cantidad;
        }
      }
    });
  }
  abrirDialogParaEditarPlato(lineaDePlatoParaEditar:LineaDePlato){ 
    let precio = lineaDePlatoParaEditar.plato.precio;
    let cantidad = lineaDePlatoParaEditar.cantidad; 
    const dialogRef = this.dialog.open(DialogPlatosComponent, {
      width: '500px',
      data: lineaDePlatoParaEditar,
    }); 
    dialogRef.afterClosed().subscribe(result => { 
      if(precio!=result.plato.precio || cantidad!=result.cantidad){
        this.Pedido.precioTotal = this.Pedido.precioTotal - precio * cantidad;
        this.Pedido.precioTotal = this.Pedido.precioTotal + result.plato.precio * result.cantidad;
      }
    });
  }
  eliminarPlato(lineaDePlatoParaEliminar:LineaDePlato){
    for(let linea of this.Pedido.lineaDePlatos){
      if(linea.plato.id == lineaDePlatoParaEliminar.plato.id &&
        linea.cantidad == lineaDePlatoParaEliminar.cantidad &&
        linea.preferencia == lineaDePlatoParaEliminar.preferencia &&
        linea.descripcion === lineaDePlatoParaEliminar.descripcion){
          this.Pedido.lineaDePlatos = this.Pedido.lineaDePlatos.filter(
            ldp => ldp !== linea
          );
      }
    }
    this.Pedido.precioTotal = this.Pedido.precioTotal - lineaDePlatoParaEliminar.plato.precio * lineaDePlatoParaEliminar.cantidad;
  }
 
  //LINEA DE GUARNICIONES --
  openDialogGuarniciones(): void {
    const dialogRef = this.dialog.open(DialogGuarnicionesComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => { 
      if(result!=null){
        if(this.Pedido.lineaDeGuarniciones==null){ 
          this.Pedido.lineaDeGuarniciones = [new LineaDeGuarnicion()];
          this.Pedido.lineaDeGuarniciones.pop();
          this.Pedido.lineaDeGuarniciones.push(result);
          this.Pedido.precioTotal = this.Pedido.precioTotal + result.guarnicion.precio * result.cantidad;
        }else{
          this.Pedido.lineaDeGuarniciones.push(result);
          this.Pedido.precioTotal = this.Pedido.precioTotal + result.guarnicion.precio * result.cantidad;
        }
      }
    });
  }
  abrirDialogParaEditarGuarnicion(lineaDeGuarnicionParaEditar:LineaDeGuarnicion){
    let precio = lineaDeGuarnicionParaEditar.guarnicion.precio;
    let cantidad = lineaDeGuarnicionParaEditar.cantidad;  
    const dialogRef = this.dialog.open(DialogGuarnicionesComponent, {
      width: '500px',
      data: lineaDeGuarnicionParaEditar,
    }); 
    dialogRef.afterClosed().subscribe(result => {  
      if(precio!=result.guarnicion.precio || cantidad!=result.cantidad){
        this.Pedido.precioTotal = this.Pedido.precioTotal - precio * cantidad;
        this.Pedido.precioTotal = this.Pedido.precioTotal + result.guarnicion.precio * result.cantidad;
      }
    });
  }
  eliminarGuarnicion(lineaDeGuarnicionParaEliminar:LineaDeGuarnicion){
    for(let linea of this.Pedido.lineaDeGuarniciones){
      if(linea.guarnicion.id == lineaDeGuarnicionParaEliminar.guarnicion.id &&
        linea.cantidad == lineaDeGuarnicionParaEliminar.cantidad &&
        linea.descripcion === lineaDeGuarnicionParaEliminar.descripcion){
          this.Pedido.lineaDeGuarniciones = this.Pedido.lineaDeGuarniciones.filter(
            ldg => ldg !== linea
          );
      }
    }
    this.Pedido.precioTotal = this.Pedido.precioTotal - lineaDeGuarnicionParaEliminar.guarnicion.precio * lineaDeGuarnicionParaEliminar.cantidad;
  }

  abrirDialogParaEditarPedido(){
    let cliente = this.Pedido.cliente;
    const dialogRef = this.dialog.open(DialogEditarPedidoComponent, {
      width: '500px',
      data: this.Pedido,
    });  
  }

  eliminar(){
    swal.fire({
      title: 'Estas seguro?',
      text: "No vas a poder revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
      }).then((result) => {
          if (result.value) {
              this.pedidoService.deletePedido(this.Pedido.id).subscribe(
                response=>{
                  swal.fire('Eliminado!','Lo haz eliminado.','success') ;
                  this.goto("../mesas");
                });
        }
    }) 
  }

  guardar(){
    this.pedidoService.updatePedido(this.Pedido).subscribe(
      pedido=>{
        swal.fire('Pedido Guardado',
              `El pedido de ${pedido.cliente} se actualizado con éxito`,'success')
      }
    );
    this.goto("../Mesas");
  }

  public goto(url){
    this.router.navigate([url]).then((e)=>{
      if(e){
        console.log("Navigation succesfull!");
      }else{
        console.log("Navigation has failed!");
      }
    });
  }
}