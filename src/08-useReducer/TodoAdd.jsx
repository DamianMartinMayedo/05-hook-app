import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
        
    }

    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-dark mt-3"
            >
                Agregar
            </button>
        </form>

    )
}
