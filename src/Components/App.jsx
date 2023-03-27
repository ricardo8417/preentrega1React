import './App.css';
import {Menu} from './Navbar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <Menu />
    <ItemListContainer greeting={'Bienvenidos a su tienda Online Systems'} />
    </div>
  );
}

export default App;
