//Css
import './App.css';

//Components
import Banner from './components/Banner/Banner';
import NavbarCustom from './components/Navbar/NavbarCustom';
import Introduce from './components/IntroduceBanner/Introduce';
import BestProduct from './components/BestProduct/BestProduct';
import ProductList from './components/ProductList/ProductList';
import BrandStory from './components/BrandStory/BrandStory';
import Issue from './components/Issue/Issue';

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

      { /*Brand Story*/ }
      <BrandStory />

      { /*Issue*/ }
      <Issue />
    </div>
  );
}

export default App;
