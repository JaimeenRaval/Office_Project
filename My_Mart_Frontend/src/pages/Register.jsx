import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Register</h2>
      <input type="text" placeholder="Name" className="border p-2 w-full my-2" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" className="border p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className="border p-2 w-full my-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
