import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./small"


export const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Counter: <Small value={counter}/></h1>
      <hr />

      <button
        className="btn btn-dark"
        onClick={() => increment()}
      >
        +1
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={()=>setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>

    </>
  )
}
