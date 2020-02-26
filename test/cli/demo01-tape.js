var test = require('tape');

const usecases = require('../../core/usecases');

test('listar tareas', function(t) {
  const result = usecases.listarTareas();
  t.equal(Array.isArray(result), true);
  t.end();
});

test('agregar tarea', function (t) {
  const result = usecases.agregarTarea('Preparar el desayuno');
  t.equal(typeof result, 'object');
  t.end();
});