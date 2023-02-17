import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './common/Footer/Footer';
import Navbar from './common/Navbar/Navbar';
import Catalog from './pages/Catalog/Catalog';
import Corzina from './pages/Corzina/Corzina';
import Decor from './pages/Decor/Decor';
import Main from './pages/main/Main';
import SingleProduct from './pages/Singleproduct/SingleProduct';



const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/singleproduct' element={<SingleProduct />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/corzina' element={<Corzina />}/>
        <Route path='/corzina/decor' element={<Decor />}/>
      </Routes>        
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
