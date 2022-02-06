import { Component, OnInit } from '@angular/core';
import { DatoslistaService } from '../datoslista.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  nombre = "";
  descripcion = "";
  prioridad = "";
  tareas: DatoslistaService;

  constructor(tareas: DatoslistaService) {this.tareas = tareas;} // tareas recibe todos los métodos de DatoslistaService

  agregar() {
    // Creo el objeto de la tarea
    if (this.nombre && this.prioridad && this.descripcion) {
      let nota = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        prioridad: this.prioridad,
        fecha: new Date().toLocaleString(),
        estado: false,
      };
      this.tareas.agregarNota(nota); // Se pasa al servicio

      // Limpio los datos
      this.nombre = "";
      this.descripcion = "";

    }
  }
  ngOnInit(): void {
  }

}
