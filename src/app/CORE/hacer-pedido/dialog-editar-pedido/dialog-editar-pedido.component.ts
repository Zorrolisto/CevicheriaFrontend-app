import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';  
import { Pedido } from 'src/app/CRUDS/pedido/pedido-class/pedido';

@Component({
  selector: 'app-dialog-editar-pedido',
  templateUrl: './dialog-editar-pedido.component.html',
  styleUrls: ['./dialog-editar-pedido.component.css']
})
export class DialogEditarPedidoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditarPedidoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:Pedido)
  {
    dialogRef.disableClose = true;
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }
}
