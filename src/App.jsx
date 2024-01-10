import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/top-section";
import Cards from "./components/card-section";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default App;
