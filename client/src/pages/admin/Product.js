import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/navbar/AdminMenu";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;

export default function AdminProduct() {
  /** Context */
  const [auth, setAuth] = useAuth();
  /** State */
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

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

            <div className="p-3">
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => console.log(e.target.files)}
              />
            </div>

            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Category"
              onChange={(value) => setCategory(value)}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c.name}></Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}
