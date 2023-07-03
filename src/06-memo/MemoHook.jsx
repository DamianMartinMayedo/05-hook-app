import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const iterationTest = (value) =>{
  for (let i = 0; i < value; i++) {
    console.log('hola test')
    
  }
  return value;
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(false)

  //el useMemo es un hook que funciona igual que el memorize(permite que una accion se repita sólo cuando se requiere y no con cualquier acción)
  //se le indica lo que se quiere memorizar y la dependencia que cambia (en este caso cambia si cambia el valor del counter)
  // usualmente se guarda en una variable el retorno de useMemo

  const valorMemorizado = useMemo(() => iterationTest(counter), [counter])
  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />
      <h4>Numero de iteraciones {valorMemorizado}</h4>

      <button
        className="btn btn-dark"
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className="btn btn-outline-dark mx-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>

    </>
  )
}
