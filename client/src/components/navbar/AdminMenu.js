import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/category">
            Add Category
          </NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/product">
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/products">
            List Products
          </NavLink>
        </li>
      </ul>
    </>
  );
}
