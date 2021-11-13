import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
