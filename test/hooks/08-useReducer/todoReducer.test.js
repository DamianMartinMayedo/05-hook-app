import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe('pruebas sobre el usereducer', () => {
    const initialState = [{
        id: 1,
        description: 'demo demo',
        done: false,
    }];

    test('debe retornar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('agregar un toDo', () => {
        const newToDoAction = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo ToDo de ejemplo',
                done: false
            }
        };

        const newState = todoReducer(initialState, newToDoAction);
        expect(newState.length).toBe(2);
        expect(newState).toContain(newToDoAction.payload);
    });

    test('eliminar TODO', () => {
        const eliminarAction = {
            type: 'Borrar ToDo',
            payload: 1
        };

        const newState = todoReducer(initialState, eliminarAction);
        expect(newState.length).toBe(0);
    });

    test('toogle ToDo', () => { 
        const toggleAction = {
            type: 'Toggle ToDo',
            payload: 1
        };
        const newState = todoReducer(initialState, toggleAction);
        expect(newState[0].done).toBe(true);
     });

})