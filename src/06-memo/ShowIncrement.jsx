import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('hola');
    return (
        <button
            className="btn btn-dark"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})
