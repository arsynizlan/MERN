import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "../routes/Loading";
import axios from "axios";

export default function AdminRoute() {
  /** Context */
  const [auth, setAuth] = useAuth();
  /** State */
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const adminCheck = async () => {
      const { data } = await axios.get(`/admin-check`);

      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    adminCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading path="" />;
}
