import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  /** State */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** Hook */
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Successfully logged in");
        navigate(
          location.state ||
            `/dashboard/${data?.user?.role === 1 ? "admin" : "user"}`
        );
      }
    } catch (err) {
      toast.error("Login failed!");
    }
  };

  return (
    <div>
      <Jumbotron title="Login" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-4">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-4 p-2 "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
