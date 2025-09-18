import './App.css'
import { MOVIES } from './assets/moviesData'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className='flex gap-6'>
        {MOVIES.map(movie => (
          <Card
            // {...movie} - можно и так проще распаковать все что есть 
            key={movie.name}
            name={movie.name}
            image={movie.image}
            rating={movie.raiting}
          />
        ))}
      </div>
     
    </>
  )
}

export default App