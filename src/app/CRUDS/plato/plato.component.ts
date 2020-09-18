import { Component, OnInit } from '@angular/core';
import {Plato} from './plato';
import {PlatoService} from './plato.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  platos:Plato[];

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.listarPlatos();
  }

  listarPlatos(){
    this.platoService.getPlatos().subscribe(
      platos => {this.platos = platos}
    )
  }

}
