import React from 'react'

//en este caso ademas de useCallBack tambien hay que memorizar la funcion hija
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-2"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
