import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    //el useCallback sirve para memorizar funciones
    //es necesario utilizar el React.memo en la funcion hija (showIncrement)
    //para esto hay que utilizar el setcounter(en este caso) de esta manera(actualizando el valor actual de la variable)
    //tanto las funciones como los objetos siempre apuntan a un espacio en memoria diferente
    const incrementFather = useCallback(
        () => {
            setCounter((value) => value + 1);
        },
        [],
    );

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
