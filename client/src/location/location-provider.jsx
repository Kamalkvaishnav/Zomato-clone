import React, { useContext, useEffect, useState } from "react";

const LocationContext = React.createContext();

export function useLocation() {
  return useContext(LocationContext);
}

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {}, [location]);

  function updateLocation(newLocation) {
    setLocation(newLocation);
  }

  const value = {
    location: location,
    setLocation: updateLocation,
  };

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}
