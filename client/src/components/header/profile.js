import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="flex">
      {isAuthenticated ? (
        <>
          <div className="p-6 ml-80 flex">
            <i class="fas fa-user mr-3 justify-center align-middle  text-xl"></i>
            Hey {user.name}
          </div>
          <LogoutButton />
        </>
      ) : (
        <div className="flex p-6 ml-72 ">
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default Profile;
