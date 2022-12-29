import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  /** State */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** Hook */
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Successfully registered");
        navigate("/");
      }
    } catch (err) {
      toast.error("Register failed!");
    }
  };

  return (
    <div>
      <Jumbotron title="Register" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2 "
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />

              <input
                type="email"
                className="form-control mb-4 p-2 "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2 "
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
