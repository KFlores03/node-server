const readline = require('readline-sync');

const tasks = [];

function addTask() {
  const indicator = readline.question('Indicador de la tarea: ');
  const description = readline.question('Descripción de la tarea: ');
  tasks.push({ indicator, description, completed: false });
  console.log('Tarea añadida.');
}

function deleteTask() {
  const index = readline.questionInt('Índice de la tarea a eliminar: ');
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Índice inválido.');
  }
}

function completeTask() {
  const index = readline.questionInt('Índice de la tarea completada: ');
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada.');
  } else {
    console.log('Índice inválido.');
  }
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`${index}. ${task.indicator}: ${task.description} (${status})`);
  });
}

while (true) {
  console.log('\nSelecciona una opción:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  const choice = readline.questionInt('Opcion: ');

  switch (choice) {
    case 1:
      addTask();
      break;
    case 2:
      deleteTask();
      break;
    case 3:
      completeTask();
      break;
    case 4:
      showTasks();
      break;
    case 5:
      process.exit();
    default:
      console.log('Opción inválida.');
  }
}