import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    //desestructuramos el formState para acceder a los valores del useState
    const [formState, setFormState] = useState({
        username: 'Pepe',
        email: 'ejemploemail@gmail.com'
    });

    const { username, email } = formState;
    // con el target accedemos a las propiedades del input (estamos desestructurando del evento principal)
    //capturamos el cambio en los inputs
    const onInputchange = ({ target }) => {
        //desestructuramos nombre y valor del target(inputs)
        const { name, value } = target;
        setFormState({
            ...formState,
            //propiedades computadas de los objetos se ponen entre []
            [name]: value,
        })
    }

    // no se recomienda utilizar useEffects sin las dependencias (condiciones para las cuales se vuelve a disparar el hook)
    //si la dependencia es un arreglo vacio [] estamos indicando que se dispare solo una vez
    useEffect(() => {
        // console.log('useEffect disparado!');
    }, []);
    //se recomienda utilizar un useState para cada accion que queramos llamar
    //ambio en cualquier input del form
    useEffect(() => {
        // console.log('formState Cambio');
    }, [formState]);
    //cambio en el email
    useEffect(() => {
        // console.log('email Cambio');
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputchange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="correo@gmail.com"
                name="email"
                value={email}
                onChange={onInputchange}
            />
            {
                (username === 'Pepe1') && <Message />

            }

        </>
    )
}
