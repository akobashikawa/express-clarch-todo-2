const lista = [];

exports.listarTareas = () => lista;

exports.agregarTarea = (texto) => {
  const nuevaTarea = {
    texto
  };
  lista.push(nuevaTarea);
  return nuevaTarea;
};