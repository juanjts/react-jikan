import React from 'react'
import './search.css'

function Search({getAnime, setSearch, search}) {
    return (
        <div className="search">
            <h2 className="search__title">¿Qué quieres ver hoy?</h2>
            <div className="btn-search">
                <input className="search__input" type="text" placeholder="Buscar..." value={search} onChange={(event) => setSearch(event.target.value)}></input>
                <button className="button" onClick={() => getAnime(search)}>Buscar</button>
            </div>
            
        </div>
    )
}

export default Search
