import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Category = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        // setLoading(false)
      }
    };

    fetchProducts();
  }, []);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) {
    return (
      <div>
        <h1>Loading.........</h1>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.title}
              style={{ height: 112, width: 130 }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
