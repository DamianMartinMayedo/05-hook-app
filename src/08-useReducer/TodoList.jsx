import { TodoItem } from "./TodoItem"


export const TodoList = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todo.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={id => onDeleteTodo(id)}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}
