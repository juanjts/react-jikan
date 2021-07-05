import React from 'react'
import './search.css'

function Search({getAnime, setSearch, search}) {
    return (
        <div className="search">
            <h2 className="search__title">Find your favorite anime</h2>
            <div className="btn-search">
                <input className="search__input" type="text" placeholder="Search anime by id ..." value={search} onChange={(event) => setSearch(event.target.value)}></input>
                <button className="button" onClick={() => getAnime(search)}>Search</button>
            </div>
            
        </div>
    )
}

export default Search
