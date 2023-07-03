import { useFetch, useCounter } from '../hooks'
import { LoadingEpisode, RickAndMortyEpisodes } from '../03-examples';

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`)

    //**********************************************************************
   //El useLayoutEffect funciona igual que el use Effect (de hecho se recomuenda usar ese)
   //por lo que ni me molesté en hacerlo
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