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

  constructor(
    public dialogRef: MatDialogRef<DialogPlatosComponent>,
    private platoService: PlatoService,
    @Inject(MAT_DIALOG_DATA) public data:LineaDePlato
  ) { }

  ngOnInit(): void { 
    if(this.data){

    }else{
      this.data = new LineaDePlato(); 
    }
    this.platoService.getPlatos().subscribe(
      Platos => this.Platos = Platos
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
