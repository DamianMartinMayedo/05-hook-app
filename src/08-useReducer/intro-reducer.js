//El reducer produce un nuevo estado en dependencia de la acción que recibe
//en este ejemplo estamos despalillando el reducer para entenderlo mejor
const initialState = [{
    id: 1,
    todo: 'Hacer algo',
    done: false,
}];

//un reducer no es mas que una funcion que recibe dos parametros, el estado y la accion que cambia el estado
//se le envia el estado inicial
const todoReducer = (state = initialState, action = {}) => {

    //aqui adiciono el todo con el action, se utiliza el spread para no hacer una mutacion en el arreglo
    if (action.type === 'Add ToDo') {
        return [...state, action.payload]
    }

    return state;
}

let toDo = todoReducer();
//creo el nuevo toDo
const newToDo = {
    id: 2,
    todo: 'Hacer algo mas',
    done: false,
}
//creo la accion del reducer, en este caso para adicionar un nuevo to do
const addToDoAction = {
    //la accion por lo general trae el type y puede traer el elemento a adicionar (payload) o la acción concreta a realizar (borrar, actualizar, etc)
    type: 'Add ToDo',
    payload: newToDo,
}

toDo = todoReducer(toDo, addToDoAction);

console.log(toDo);