import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import SignupButton from "../SignupButton";
import { useAuthUser } from "../../auth/auth-user-provider";

function Profile() {
  const user = useAuthUser();
  return (
    <div className="flex">
      {user ? (
        <>
          <div className="p-6 ml-80 flex">
            <i className="fas fa-user mr-3 justify-center align-middle  text-xl"></i>
            Hey {user.name}
          </div>
          <LogoutButton />
        </>
      ) : (
        <div className="flex p-6 ml-72 space-x-4">
          <LoginButton />
          <SignupButton />
        </div>
      )}
    </div>
  );
}

export default Profile;
