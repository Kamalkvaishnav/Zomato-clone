import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("customer");
  const { user } = useAuth0();

  const handleCompleteProfile = async () => {
    const res = await axios.post(`http://localhost:5000/signup`, {
      fullname: fullname,
      email: user.email,
      role: role,
      id: user.sub,
    });
  };

  return (
    <div className="flex flex-col w-1/2 mx-auto border-2 p-4 gap-6">
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
        className="bg-green-400 rounded-md hover:opacity-90 active:scale-95 px-4 py-2"
      >
        Complete Profile
      </button>
      <div>
        {fullname} {role}
      </div>
    </div>
  );
};

export default Signup;
