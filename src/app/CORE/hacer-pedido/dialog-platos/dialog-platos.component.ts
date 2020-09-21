import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { LineaDePlato } from 'src/app/CRUDS/pedido/pedido-class/linea-de-plato-class/linea-de-plato';
import { Plato } from 'src/app/CRUDS/plato/plato-class/plato';
import { PlatoService } from 'src/app/CRUDS/plato/plato-service/plato.service';

@Component({
  selector: 'app-dialog-platos',
  templateUrl: './dialog-platos.component.html',
  styleUrls: ['./dialog-platos.component.css']
})
export class DialogPlatosComponent implements OnInit {

  Platos: Plato[];
  preferencia: string;
  puedeCerrar: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogPlatosComponent>,
    private platoService: PlatoService,
    @Inject(MAT_DIALOG_DATA) public data:LineaDePlato)
  {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void { 
    if(this.data){ 
      this.preferencia = this.data.preferencia.toString();
    }else{
      this.data = new LineaDePlato(); 
      this.data.plato = new Plato();
      this.puedeCerrar = true;
    }
    this.platoService.getPlatos().subscribe(
      Platos => this.Platos = Platos
    );
  }

  onSelectValueChangePlato(){
    for(let plato of this.Platos){
      if(plato.id == this.data.plato.id){
        this.data.plato = plato;
      }
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
