import { Component, OnInit } from '@angular/core';
import {Bebida} from './bebida';
import {BebidaService} from './bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  bebidas:Bebida[];

  constructor(private bebidaService:BebidaService) { }

  ngOnInit(): void {
    this.listarBebidas();
  }

  listarBebidas(){
    this.bebidaService.getBebidas().subscribe(
      bebidas=>{this.bebidas=bebidas}
    )
  }

}
