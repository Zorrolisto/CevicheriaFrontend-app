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

  constructor(
    public dialogRef: MatDialogRef<DialogBebidasComponent>,
    private bebidaService:BebidaService,
    @Inject(MAT_DIALOG_DATA) public data:LineaDeBebida) 
  {}
  
  ngOnInit(): void { 
    if(this.data){

    }else{
      this.data = new LineaDeBebida(); 
    }
    this.bebidaService.getBebidas().subscribe(
      Bebidas => this.Bebidas = Bebidas
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
