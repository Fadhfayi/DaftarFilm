import logo from './logo.svg';
import './App.css';
import Barang from './component/Class/Barang';

const datBarang = [
  {
    id : 1,
    nama : 'Botol aqua',
    stok : 10,
    harga : 500,
  }
];

function App() {
  return (
    <div className="App">
      <Barang datBarang={datBarang}/>
    </div>
  );
}

export default App;
