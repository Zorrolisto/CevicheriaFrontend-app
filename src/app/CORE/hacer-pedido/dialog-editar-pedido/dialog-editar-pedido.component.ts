import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';  
import { Pedido } from 'src/app/CRUDS/pedido/pedido-class/pedido';

@Component({
  selector: 'app-dialog-editar-pedido',
  templateUrl: './dialog-editar-pedido.component.html',
  styleUrls: ['./dialog-editar-pedido.component.css']
})
export class DialogEditarPedidoComponent implements OnInit{
  
  preferencia:string;
  estado:string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditarPedidoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:Pedido)
  {
    dialogRef.disableClose = true;
  } 
  ngOnInit(): void {
    this.estado = this.data.estado.toString();
    this.preferencia = this.data.preferencia.toString();
  }

  onSelectValueChangeEstado(){
    if(this.estado=="true"){
      this.data.estado = true;
    }
    if(this.estado=="false"){
      this.data.estado = false;
    }
  }

  onSelectValueChangePreferencia(){
    if(this.preferencia=="true"){
      this.data.preferencia = true;
    }
    if(this.preferencia=="false"){
      this.data.preferencia = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
