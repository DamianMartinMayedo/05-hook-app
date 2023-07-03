import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../src/08-useReducer/TodoApp"
import { useTodos } from "../../../src/hooks/useTodos"

jest.mock('../../../src/hooks/useTodos');

describe('Pruebas en TodoApp', () => {
    useTodos.mockReturnValue({
        toDo: [
            { id: 1, description: 'Casa de mama', done: false },
            { id: 2, description: 'Casa de papa', done: true },
        ],
        todoCount: 2,
        pendingTodos: 1,
        handleBorrarToDo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleTodo: jest.fn()
    });

    test('mostrar el componente correctamente', () => {
        render(<TodoApp />);
        expect(screen.getByText('Casa de mama')).toBeTruthy();
        expect(screen.getByText('Casa de papa')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        // screen.debug();
    })
})