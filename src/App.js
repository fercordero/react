import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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


    </></>
  );
}



export default App;
