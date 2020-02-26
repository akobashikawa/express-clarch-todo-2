console.log('# Express Clarch To Do');

const usecases = require('../core/usecases');

//---
console.log('## Listar tareas');

const listarTareas = function() {
  const tareas = usecases.listarTareas();
  console.log(tareas);
};

listarTareas();

//---
console.log('## Agregar una tarea');

const agregarTarea = function(texto) {
  const tarea = usecases.agregarTarea(texto);
};

agregarTarea('Preparar el desayuno');
listarTareas();