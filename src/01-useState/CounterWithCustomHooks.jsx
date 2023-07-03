import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHooks = () => {

  //la desestructuración DEL userCounter debe corresponder con el retorno (en este caso se retorna un objeto)
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />
      {/* para pasarle un valor querido a las funciones tengo que tener en cuenta el evento click, por eso es que se hace asi */}
      <button onClick={() => increment(5)} className="btn btn-dark">+1</button>
      <button onClick={reset} className="btn btn-dark mx-2">Reset</button>
      <button onClick={() => decrement(5)} className="btn btn-dark">-1</button>
    </>

  )
}
