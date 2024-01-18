import "./App.css";
import Header from "./components/header";
import Card from "./components/top-section";
import Cards from "./components/card-section";
import Footer from "./components/footer";
import Product from "./components/product-section";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
