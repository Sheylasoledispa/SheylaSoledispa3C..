 // Vista (View) en esta clase muestra al usuario el resultado que dan ambas clases

 import { Modelo } from "./Modelo"; //importamos las clases para un mejor funcionamiento
 import { Vista_Modelo } from "./vista modelo";
 export class Vista {

  constructor(private viewModel: Vista_Modelo) {}

  // Realizamos un metodo para que salga el resultado de la tarea
  showTasks(): void {
    for (const tarea of this.viewModel.tasks) {
      console.log(`Tarea: ${tarea.title} - Completada: ${tarea.completed}`);
    }
  }
}