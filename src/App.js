
//Css
import './App.css';

//Components
import Banner from './components/Banner/Banner';
import NavbarCustom from './components/Navbar/NavbarCustom';
import Introduce from './components/IntroduceBanner/Introduce';
import BestProduct from './components/BestProduct/BestProduct';
import ProductList from './components/ProductList/ProductList';

//Components

function App() {
  return (
    <div className="App">
      { /*Navbar*/ }  
      <NavbarCustom />

      { /*Banner*/ }
      <Banner />

      {  /*Introduce Banner*/ }
      <Introduce />

      {  /*Best Product*/ }
      <BestProduct />

      { /*Product List*/ }
      <ProductList /> 
    </div>
  );
}

export default App;
