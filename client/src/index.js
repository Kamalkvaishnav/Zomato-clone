import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Main from "./components/main/index";
import Restaurant from "./components/main/RestaurantPage/Restaurant";
import ForRestaurant from "./components/ForRestaurant/ForRestaurant";
import Signup from "./pages/Signup";
import { AuthUserProvier } from "./auth/auth-user-provider";
import { LocationProvider } from "./location/location-provider";
import AddResto from "./pages/AddResto";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>

        <AuthUserProvier>
          <LocationProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Main />} />
                <Route path="/Restaurant/:id" element={<Restaurant/>}/>
                <Route path="/dealer" element={<ForRestaurant/>}/>
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/addResto" element={<AddResto />} />
              </Route>
            </Routes>
          </LocationProvider>
        </AuthUserProvier>

      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
