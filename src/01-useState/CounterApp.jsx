import { useState } from "react"

export const CounterApp = () => {

    //el useState tambien puede contener un objeto
    //si sólo se quiere cambiar uno de los valores del state hay que asegurar la persistencia de lo otros(que su valor no cambie)
    const [counterState, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    //desestructuramos el counterState para poder utilizar el spread
    const { counter1, counter2, counter3 } = counterState;
    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>
            <hr />
            <button className="btn btn-light" onClick={() => setCounter({
                // con el spread me aseguro la persistencia de todos los datos que no quiero cambiar, sin importar cuantos sean
                ...counterState,
                //entonces accedo a la propiedad que quiero cambiar
                counter1:counter1+1,
            })}>+1</button>
        </>
    )
}
