

export const RickAndMortyEpisodes = ({episode, name, date}) => {
    return (     
        <div >
            <h5>Episode: {episode}</h5>
            <h2>{name}</h2>
            <p className='small'>{date}</p>
        </div>     
    )
}
