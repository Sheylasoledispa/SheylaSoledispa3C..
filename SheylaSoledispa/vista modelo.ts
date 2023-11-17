 // Vista Modelo (ViewModel) esta clase sirve como un puente entre las otras dos para realizar los procesos.
 import { Modelo } from "./Modelo";
 export class Vista_Modelo {

  // Implementamos la lista de las tareas 
  tasks: Modelo[] = [];

  // realizamos un metodo para añadir las tareas 
  addTask(title: string): void {
    const task = new Modelo(title);
    this.tasks.push(task);
  }

  // realizamos un metodo para marcar el resultado de las tareas 
  completeTask(task: Modelo): void {
    task.completed = true;
  }
}