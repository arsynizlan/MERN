import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "../routes/Loading";
import axios from "axios";

export default function PrivateRoute() {
  /** Context */
  const [auth, setAuth] = useAuth();
  /** State */
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`/auth-check`);

      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
}
