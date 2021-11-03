import { About, Banner, BestProduct, Navbar, Products,BrandStory, Issue,  Wht30sMain, Footer } from './components';
import { GlobalStyle } from './globalStyle'
import banner from './assets/images/main-banner.png'
import { products } from './assets/datas';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner banner={banner}/>
      <About/>
      <BestProduct/>
      <Products data={products}/>
      <BrandStory/>
      <Issue/>
      <Wht30sMain />
      <Footer/>
    </>
  );
}

export default App;
