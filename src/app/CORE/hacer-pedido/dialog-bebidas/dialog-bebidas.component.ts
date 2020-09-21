import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { Bebida } from 'src/app/CRUDS/bebida/bebida-class/bebida';
import { BebidaService } from 'src/app/CRUDS/bebida/bebida-service/bebida.service';
import { LineaDeBebida } from 'src/app/CRUDS/pedido/pedido-class/linea-de-bebida-class/linea-de-bebida';

@Component({  
  selector: 'app-dialog-bebidas',
  templateUrl: './dialog-bebidas.component.html',
  styleUrls: ['./dialog-bebidas.component.css']
})
export class DialogBebidasComponent implements OnInit {

  Bebidas:Bebida[]; 
  temperatura: string; 
  puedeCerrar: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogBebidasComponent>,
    private bebidaService:BebidaService,
    @Inject(MAT_DIALOG_DATA) public data:LineaDeBebida) 
  {
    dialogRef.disableClose = true;
  }
  
  ngOnInit(): void { 
    if(this.data){ 
      this.temperatura = this.data.temperatura.toString(); 
    }else{
      this.data = new LineaDeBebida(); 
      this.data.bebida = new Bebida();
      this.puedeCerrar = true;
    }
    this.bebidaService.getBebidas().subscribe(
      Bebidas => this.Bebidas = Bebidas
    );
  }

  onSelectValueChangeBebida(){
    for(let bebida of this.Bebidas){
      if(bebida.id == this.data.bebida.id){
        this.data.bebida = bebida;
      }
    }
  }

  onSelectValueChangeTemperatura(){
    if(this.temperatura=="true"){
      this.data.temperatura = true;
    }
    if(this.temperatura=="false"){
      this.data.temperatura = false;
    }
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
