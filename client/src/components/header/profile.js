import React from "react";

function Profile(props) {
  return (
    <div>
      {props.profileStatus === "LogedIn" ? (
        <div className=" p-6 ml-80 flex">
          <i class="fas fa-user mr-3 justify-center align-middle  text-xl"></i>
          Hey User!
        </div>
      ) : (
        <div className="flex p-6 ml-72 ">
          <button className="mr-10 p-1 justify-center align-middle">
            Log in
          </button>
          <button className="justify-center align-middle p-1">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
