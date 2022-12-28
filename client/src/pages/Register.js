import { useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  /** State */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/register`,
        {
          name,
          email,
          password,
        }
      );
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Successfully registered");
      }
    } catch (err) {
      toast.error("Registration failed");
    }
  };

  return (
    <div>
      <Jumbotron title="Register" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2 "
                placeholder="Masukan Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />

              <input
                type="email"
                className="form-control mb-4 p-2 "
                placeholder="Masukan Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2 "
                placeholder="Masukan Password"
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
