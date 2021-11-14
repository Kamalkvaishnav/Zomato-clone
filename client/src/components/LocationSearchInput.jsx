import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

const LocationSearchInput = ({ onSelect }) => {
  const [value, setValue] = useState(null);

  const setGeocode = async (location) => {
    const placeId = location.value.place_id;
    const geocodes = await geocodeByPlaceId(placeId);
    const { lat, lng } = await getLatLng(geocodes[0]);
    onSelect(location, { lat: lat, lng: lng });
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        className="w-full"
        selectProps={{
          value,
          onChange: (val) => {
            setValue(val);
          },
        }}
      />
    </div>
  );
};

export default LocationSearchInput;
