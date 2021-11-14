import React from "react";
import LocationSearchInput from "../LocationSearchInput";
import Profile from "./profile";
import { useLocation } from "../../location/location-provider";

function Header() {
  const { setLocation } = useLocation();

  return (
    <div className="header align-middle flex max-w-7xl ml-auto mr-auto">
      <div className="flex ">
        <div className="header-logo  p-6 justify-center text-lg">
          <img
            className="w-20 h-5 align-middle justify-center mt-2"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          ></img>
        </div>
        <div className="header-searchbar p-6 flex-col">
          <LocationSearchInput onSelect={setLocation} />

          <div className="header-icon-searchbar shadow rounded-md">
            <div className="m-1">
              <i className="fas fa-search  mr-3 ml-3 text-xl justify-center align-middle"></i>
              <input
                className="outline-none p-1 justify-center align-middle w-72 rounded-md"
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </div>
        </div>
        <div className="header-profile">
          <Profile />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Header;
