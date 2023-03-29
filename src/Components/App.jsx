import './App.css';
import {Menu} from './Navbar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <Menu />
    <ItemListContainer greeting={'Lista de Productos'} />
    </div>
  );
}

export default App;
