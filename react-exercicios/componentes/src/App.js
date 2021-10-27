import Item from './components/item';
import Card from './components/card'
import './styleComponent.css'

const App = () => {
  return(
    <div className="centralizar">
    <h1 className="titulo">Minha primeira aplicacao com React</h1>
    <ul className="lista">
      <Item> Item 1 </Item>
      <Item> Item 2 </Item>
      <Item> Item 3 </Item>
    </ul>
    <Card/>
    </div>
  )
}

export default App;