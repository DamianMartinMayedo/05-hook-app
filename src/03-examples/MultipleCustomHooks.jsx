
import { useFetch, useCounter } from '../hooks'
import { LoadingEpisode, RickAndMortyEpisodes } from './index';

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`)

    //**********************************************************************
    //esto se hizo con el ejemplo de The simpsons que devolvia un arreglo, luego se cambio a R&M que devuelve el objeto
    //para desestructurar la data que es un arreglo hacemos lo siguiente
    // const { quote, character } = !!data && data[0];
    //si la data tiene un valor entonces toma data en 0
    // el !! es una doble negacion, por lo que convierte undefined  en false
    //**********************************************************************

    return (
        <>
            <h1>The Rick and Morty episodes</h1>
            <hr />
            {
                //si esta cargando muestra el loading, cuando termina muestra la info
                isLoading
                    ? <LoadingEpisode />
                    : <RickAndMortyEpisodes episode={data.episode} name={data.name} date={data.air_date} />
            }

            {/* Asi se lee mejor */}
            <button
                className='btn btn-dark p-2'
                onClick={() => decrement()}
                disabled={counter === 1} >
                Previus episode
            </button>
            <button
                className='btn btn-dark mx-2 p-2'
                onClick={() => increment()}>
                Next episode
            </button>

        </>
    )
}
