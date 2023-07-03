import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('Pruebas en ToDo item', () => {
    const todo = {
        id: 1,
        description: 'Casa de mama',
        done: false
    }
    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('mostrar el ToDo pendiente a completar', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleToDoMock}
            onDeleteTodo={onDeleteToDoMock}
        />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        //esto lo resumi, pero para el span se creo un aria-label pq no identifica el span
        expect(screen.getByLabelText('span').className).toContain('align-self-center ');
        expect(screen.getByLabelText('span').className).not.toContain('text-decoration-line-through')
        // screen.debug();
    });
    test('mostrar el ToDo completado', () => {
        todo.done = true;
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleToDoMock}
            onDeleteTodo={onDeleteToDoMock}
        />
        );
        //esto lo resumi, pero para el span se creo un aria-label pq no identifica el span
        expect(screen.getByLabelText('span').className).toContain('align-self-center text-decoration-line-through')
        //  screen.debug();
    });

    test('span debe llamar al toggle todo cuando se complete', () => { 
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleToDoMock}
            onDeleteTodo={onDeleteToDoMock}
        />
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleToDoMock).toHaveBeenCalledWith(todo.id);

     });
     test('span debe llamar al delete cuando se apriete el btn eliminar', () => { 
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleToDoMock}
            onDeleteTodo={onDeleteToDoMock}
        />
        );

        const deleteBtnElement = screen.getByRole('button');
        fireEvent.click(deleteBtnElement);
        expect (onDeleteToDoMock).toHaveBeenCalledWith(todo.id);
        
     });


})