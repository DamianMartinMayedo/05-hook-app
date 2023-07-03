import { useRef } from "react"

export const FocusScreen = () => {

    //el hook useRef permite crear una referencia directa a un elemento del DOM
    const inputRef = useRef();

    const setFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                className="form-control"
                type="text"
                placeholder="Ingrese su nombre"
            />

            <button
                className="btn btn-primary mt-3"
                onClick={setFocus}
            >
                Set Focus
            </button>
        </>
    )
}
