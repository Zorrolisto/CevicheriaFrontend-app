import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { Guarnicion } from 'src/app/CRUDS/guarnicion/guarnicion-class/guarnicion';
import { GuarnicionService } from 'src/app/CRUDS/guarnicion/guarnicion-service/guarnicion.service';
import { LineaDeGuarnicion } from 'src/app/CRUDS/pedido/pedido-class/linea-de-guarnicion-class/linea-de-guarnicion';

@Component({
  selector: 'app-dialog-guarniciones',
  templateUrl: './dialog-guarniciones.component.html',
  styleUrls: ['./dialog-guarniciones.component.css']
})
export class DialogGuarnicionesComponent implements OnInit {

  Guarniciones: Guarnicion[];
  puedeCerrar: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogGuarnicionesComponent>,
    private guarnicionesService: GuarnicionService,
    @Inject(MAT_DIALOG_DATA) public data:LineaDeGuarnicion)
  {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void { 
    if(this.data){

    }else{
      this.data = new LineaDeGuarnicion(); 
      this.data.guarnicion = new Guarnicion();
      this.puedeCerrar = true;
    }
    this.guarnicionesService.getGuarniciones().subscribe(
      Guarniciones => this.Guarniciones = Guarniciones
    );
  }

  onSelectValueChangeGuarnicion(){
    for(let guarnicion of this.Guarniciones){
      if(guarnicion.id == this.data.guarnicion.id){
        this.data.guarnicion = guarnicion;
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
