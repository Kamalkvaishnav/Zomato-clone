import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuthUser() {
  return useContext(AuthContext);
}

export function AuthUserProvier({ children }) {
  const { user: auth0User, isAuthenticated, isLoading } = useAuth0();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      axios
        .get(`http://localhost:5000/users/${auth0User.sub}`)
        .then((res) => {
          setUser({ ...auth0User, ...res.data });
        })
        .catch((err) => console.log(err));
      setUser(auth0User);
    } else {
      setUser(null);
    }
  }, [isAuthenticated, isLoading, auth0User]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
