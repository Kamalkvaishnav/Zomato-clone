import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
    <div className="relative">
      {isLoading && !isAuthenticated ? (
        <div className="fixed flex flex-col items-center justify-center inset-0 backdrop-brightness-90">
          <div className="mx-auto h-12 w-12 rounded-full animate-spin border-4 border-blue-400 border-t-blue-800"></div>
          <h1>Loading..</h1>
        </div>
      ) : null}
      <header className="App-header">
        <Navbar />
      <Header />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
