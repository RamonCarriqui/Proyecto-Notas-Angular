import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoslistaService {
  tareas = new Array();
  constructor() { }
  agregarNota(tareaEnviada:any) {
    this["tareas"].push(tareaEnviada);
    this.ordenarPrioridad();
  };
  cambiarEstado(index:any) {
    // Cambia el estado de la tarea alternativamente
    this["tareas"][index].estado = !this["tareas"][index].estado;
    this["tareas"][index].prioridad = 3; // Cuando se realiza la tarea pasa a tener prioridad 3 automáticamente

    // Cada vez que se cambia el estado se actualiza la lista guardada del localStorage
    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  aumentarPrioridad(index:any) {
    // Control de prioridad ordena y actualiza localStorage
    if (this["tareas"][index].prioridad > 1) {
      this["tareas"][index].prioridad--;
      this.ordenarPrioridad();

      localStorage["tareas"] = JSON.stringify(this["tareas"]);
    }
  };
  disminuirPrioridad(index:any) {
    // Control de prioridad ordena y actualiza localStorage
    if (this["tareas"][index].prioridad < 3) {
      this["tareas"][index].prioridad++;
      this.ordenarPrioridad();

      localStorage["tareas"] = JSON.stringify(this["tareas"]);
    }
  };
  borrar(index:any) {
    // Borra una tarea
    this["tareas"].splice(index, 1);

    // Cada vez que borro actualizo lista guardada en local
    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  borrarCompletadas() {
    // Borra todas las tareas completadas (se eliminan por completo)
    this["tareas"] = JSON.parse(localStorage["tareas"]);

    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.estado) {
        completadas.push(tarea);
      }
    });
    this["tareas"] = completadas;
    localStorage["tareas"] = JSON.stringify(this["tareas"]); // Actualizo localStorage
  };

  mostrarCompletadas() {
    // Muestra solo las tareas que tengan estado == true (completadas)
    this["tareas"] = JSON.parse(localStorage["tareas"]);

    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (tarea.estado) {
        completadas.push(tarea);
      }
      this["tareas"] = completadas;
    });
  };
  mostrarNoCompletadas() {
    // Muestra solo las tareas que tenas esta == false (no completadas)
    this["tareas"] = JSON.parse(localStorage["tareas"]);

    let noCompletadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.estado) {
        noCompletadas.push(tarea);
      }
      this["tareas"] = noCompletadas;
    });
  };
  mostrarTodas() {
    // Muestra todas las tareas (estado true y false)
    this["tareas"] = JSON.parse(localStorage["tareas"]);
  };
  ordenarPrioridad() {
    this["tareas"] = this["tareas"].sort((a, b) => {
      if (a.prioridad < b.prioridad) {
        return -1;
      } else if (a.prioridad > b.prioridad) {
        return 1;
      } else {
        return 0;
      }
    });

    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  finalizadas() {
    let finalizadas = this.tareas.filter((tarea) => !tarea.estado).length;
    return finalizadas;
  };
}

