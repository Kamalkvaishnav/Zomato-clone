import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </nav>
        <p className="bg-blue-500 text-center p-6">hello world</p>
      </header>
    </div>
  );
}

export default App;
