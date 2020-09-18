import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from './mesa';
import {MesaService} from './mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas:Mesa[];

  constructor(private mesaService: MesaService) { }

  ngOnInit(): void {
    this.listarMesas();
  }

  listarMesas():void{
    this.mesaService.getMesas().subscribe(
      mesas=>{this.mesas=mesas}
    )
  }

}
