  // Uso
  import { Modelo} from "./Modelo";
  import { Vista_Modelo } from "./vista modelo";
  import { Vista } from "./vista";

  // Creamos las instancias
  const viewModel = new Vista_Modelo();
  const view = new Vista(viewModel);

  // Añadimos las tareas 
  viewModel.addTask("Hacer la compra");
  viewModel.addTask("Hacer la tarea");
  viewModel.addTask("Limpiar la cocina");

  // Mostramos las tareas 
  view.showTasks();

  // Marcamos la tarea
  viewModel.completeTask(viewModel.tasks[0]);
  viewModel.completeTask(viewModel.tasks[1]);
  viewModel.completeTask(viewModel.tasks[2]);

  // Mostramos las tareas actualizadas
  view.showTasks();