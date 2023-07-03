import { useEffect, useState } from "react"

export const Message = () => {

    //aqui vamos a sacar las corrdenadas del mousemove mediante el useState (guardandole en coords)
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    //el use effect permite crear un codigo para cuando se monta y cuando se desmponta (return)
    useEffect(() => {
        //aqui se desestructura directamente las coordenadas X y Y del evento (se está haciendo mediante useState)
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }
        //capturando el evento del movimiento del mouse
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            //eliminando el evento
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
