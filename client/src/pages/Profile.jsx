import React from "react";
import { useAuthUser } from "../auth/auth-user-provider";

const Profile = () => {
  const user = useAuthUser();

  if (!user) {
    return <div>Loading ...</div>;
  }

  return (
    user && (
      <div>
        <h1>Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
      </div>
    )
  );
};

export default Profile;
