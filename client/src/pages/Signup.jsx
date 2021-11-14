import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const { user } = useAuth0();

  const navigate = useNavigate();

  const handleCompleteProfile = async () => {
    if (!fullname) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/users`, {
        name: fullname,
        email: user.email,
        role: role,
        uid: user.sub,
      });
      if (response.status === 200) {
        setLoading(false);
        navigate("/");
      } else {
        console.log(response.data);
        setLoading(false);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong please try again later");
      console.log("someting went wrong", err);
    }
  };

  const [value, setValue] = useState(null);

  const setGeocode = async (location) => {
    const placeId = location.value.place_id;
    const geocodes = await geocodeByPlaceId(placeId);
    const { lat, lng } = await getLatLng(geocodes[0]);
    console.log(lat, lng);
  };

  return (
    <div className="flex flex-col w-1/2 mx-w-7xl border-2 p-4 gap-6 ml-44 mr-auto ">
      <label>
        <span className="block">Full Name </span>
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="form-input w-full"
          type="text"
          placeholder="Full name"
        />
      </label>
      <label>
        <span className="block">Email</span>
        <input
          value={user ? user.email : ""}
          className="form-input w-full disabled:bg-gray-200"
          disabled
          type="email"
        />
      </label>
      <label>
        <span className="block">Role</span>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select w-full">
          <option value="customer">Customer</option>
          <option value="restraunt-owner">Restraunt owner</option>
        </select>
      </label>
      <button
        onClick={handleCompleteProfile}
        disabled={loading}
        className="bg-green-400 rounded-md hover:opacity-90 active:scale-95 px-4 py-2 flex items-center justify-center gap-4"
      >
        {loading ? (
          <span className="inline-block w-6 h-6 border-4 rounded-full border-t-blue-500 animate-spin border-gray-200"></span>
        ) : null}
        Complete Profile
      </button>
      <div>
        {fullname} {role}
      </div>
    </div>
  );
};

export default Signup;
