import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import SignupButton from "./SignupButton";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <nav className="flex items-center bg-gray-50 justify-between shadow-md px-4 py-2">
        <Link to="/">
          <h1 className="font-mono text-blue-600 font-bold text-xl">Food King</h1>
        </Link>
        <div className="space-x-2 flex items-center">
          {isAuthenticated ? (
            <Link className="flex items-center" to="profile">
              <img className="h-8 mr-2 rounded-full" src={user.picture} alt={user.name + " profile picture"} />
              <h1 className="text-xl">{user.name}</h1>
            </Link>
          ) : null}
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <>
              <LoginButton /> <SignupButton />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
