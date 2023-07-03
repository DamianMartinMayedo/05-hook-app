import { memo } from "react"

//el método memo de react permite que react 'memorize´el componente y por lo tanto el mismo no se recarga con cada cambio
//solo se recarga con cambios en el mismo
//se recomienda utilizar en códigos muy grandes donde recargar el componente sea un problema
export const Small = memo(({ value }) => {
    console.log('me estoy cargando');
    return (
        <small>{value}</small>
    )
});
