import { Component, OnInit } from '@angular/core';
import { DatoslistaService } from '../datoslista.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  listatareas: DatoslistaService;

  constructor(tareas: DatoslistaService) {this.listatareas = tareas; }
  
  ngOnInit(): void {
    this.listatareas.tareas = JSON.parse(localStorage['tareas']);

  }

}
