import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const saludo = {
    mensaje: "Basado en tu última visita ..."
};

  return (
    <><>
      <NavBar />
    </>
    <>
      <ItemListContainer saludo={saludo} />

    </>
    <>
    <ItemCount initial={1} stock={5} />
    </>
    </>
  );
}



export default App;
