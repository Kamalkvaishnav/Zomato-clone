import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    // let token;
    // getAccessTokenSilently().then((tok) => {
    //   token = tok;
    //   console.log(token, "got");
    //   fetch("http://localhost:5000/", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // });
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
