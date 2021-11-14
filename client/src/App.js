import "./App.css";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated, getIdTokenClaims } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((val) => {
        if (val && val["http://zomato-clone/sign-up"]) {
          navigate("/signup");
        }
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="relative">
      {isLoading && !isAuthenticated ? (
        <div className="fixed flex flex-col items-center justify-center inset-0 backdrop-brightness-90">
          <div className="mx-auto h-12 w-12 rounded-full animate-spin border-4 border-blue-400 border-t-blue-800"></div>
          <h1>Loading..</h1>
        </div>
      ) : null}
      <header className="App-header">
        <Header />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
