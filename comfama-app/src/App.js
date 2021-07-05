import './App.css';
import Cards from './components/Cards'
import Search from './components/Search'
import api from './axios'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  const [anime, setAnime] = useState([])

  async function getAnime(tosearch) {
    if(!tosearch) return alert("debe escribir un titulo en el buscador")
    try{
      const animeData = await api.get(tosearch)
      setAnime(animeData.data.results)
      return anime
    }catch(error){
      throw error;
    }
  }
  return (
    <div className="App">
      <Search getAnime={getAnime} setSearch={setSearch} search={search}/>
      <Cards anime={anime}/>
    </div>
  );
}




export default App;
