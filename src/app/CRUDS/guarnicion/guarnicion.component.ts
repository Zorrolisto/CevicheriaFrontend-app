import { Component, OnInit } from '@angular/core';
import {Guarnicion} from './guarnicion';
import {GuarnicionService} from './guarnicion.service';

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {

  guarniciones:Guarnicion[];
  constructor(private guarnicionService:GuarnicionService) { }

  ngOnInit(): void {
    this.listarGuarniciones();
  }

  listarGuarniciones(){
    this.guarnicionService.getGuarniciones().subscribe(
      guarniciones => {this.guarniciones= guarniciones}
    )
  }

}
