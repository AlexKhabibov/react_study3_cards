import { useState } from 'react';
import './App.css'
import { MOVIES } from './assets/moviesData'
import Card from './components/Card'

function App() {
  const [search, setSearch] = useState('');
  console.log(search); // поверка ввовда символов 

  const searchMovies = MOVIES.filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input type="search"
        value={search}
        onChange={e => { setSearch(e.target.value) }}
        placeholder="Поиск фильма" />
      <div className='flex gap-6'>
        {searchMovies.length ? searchMovies
          .map(movie => (
            <Card
              // {...movie} - можно и так проще распаковать все что есть 
              key={movie.name}
              name={movie.name}
              image={movie.image}
              rating={movie.raiting}
            />
          )) : (<p>фильм не найден</p>)}
      </div>

    </>
  )
}

export default App