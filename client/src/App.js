import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Restaurant from "./components/main/RestaurantPage/Restaurant";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/Resto" element={<Restaurant/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
