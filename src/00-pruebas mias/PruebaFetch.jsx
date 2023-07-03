import { useEffect, useState } from "react";

const API = "https://rickandmortyapi.com/api/episode"
export const PruebaFetch = () => {

    const [state, setState] = useState()

    const getFetch = async (api) => {
        const resp = await fetch(api);
        const data = await resp.json();
        const { count } = data.info;
        setState(count)
        
    }
    useEffect(() => {
        getFetch(API);
    }, [API])
    return (
        <>
            <h1>Prueba del fetch mia</h1>
            <p>{state}</p>
        </>
    )
}
