import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/navbar/AdminMenu";

export default function AdminProduct() {
  /** Context */
  const [auth, setAuth] = useAuth();
  /** State */
  const [categories, setCategories] = useState([]);

  return (
    <>
      <Jumbotron
        title={`Hallo ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Products</div>
            <p>Create </p>
          </div>
        </div>
      </div>
    </>
  );
}
