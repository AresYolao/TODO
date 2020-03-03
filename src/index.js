import './styles.css';
import { Todo, TodoList } from './clases'
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './clases/todo.class';
// import { TodoList } from './clases/todo-list.class';

const todoList = new TodoList;
const tarea = new Todo('Aprender javascript');
// const tarea2 = new Todo('Aprender React');

todoList.nuevoTodo(tarea);
tarea.completado = true;
// todoList.nuevoTodo(tarea2)
console.log(todoList);

crearTodoHtml(tarea);