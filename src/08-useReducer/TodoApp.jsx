
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from "../hooks";

//se crea el estado inicial
const initialState = [];


export const TodoApp = () => {

  const {toDo,todoCount,pendingTodos, handleBorrarToDo,handleToggleTodo,handleTodo}=useTodos()
  
  return (
    <>
      <h1>TodoApp: {todoCount}</h1>
      <small>Pendientes: {pendingTodos}</small>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todo={toDo} 
          onDeleteTodo={handleBorrarToDo}
          onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={(toDo) => handleTodo(toDo)} />
        </div>
      </div>
    </>
  )
}
