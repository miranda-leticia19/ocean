import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: "Maya Deluca-Bishop",
    imagemUrl: 'https://preview.redd.it/maya-bishop-has-been-voted-station-19s-favourite-character-v0-0rjoi6aqabhb1.jpg?width=640&crop=smart&auto=webp&s=0d3426594db90477f9f169b08fa02c53c2434b1c'
  }

  const item2 = {
    nome: 'Carina Deluca-Bishop',
    imagemUrl: 'https://static.wikia.nocookie.net/greysanatomy/images/f/f8/S196x17-3.jpg/revision/latest/scale-to-width-down/1000?cb=20230504024209'
  }

  const item3 = {
    nome: 'Travis  Montgomery ',
    imagemUrl: 'https://static.wikia.nocookie.net/greysanatomy/images/1/18/S196x08-11.jpg/revision/latest/scale-to-width-down/1000?cb=20230222031905'
  }

  const itens = [item1, item2, item3]

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item}/>
      })}
    </>
  )
}

export default App
