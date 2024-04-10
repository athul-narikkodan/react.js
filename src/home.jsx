import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from './ProductContext';
import Header from './Header';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const { updateSelectedProduct } = useProductContext();
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }finally{
        setLoading(false)
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  );
const handleNavigation=(product)=>{
  console.log(product)
  navigate('/details');
  updateSelectedProduct(product)
}

if(loading)
{
  return(
    <div>
      <h1>Loading.........</h1>
    </div>
  )
}
  return (
    <div>
      <Header/>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div onClick={()=>handleNavigation(product)} key={product.id} className="product">
            <img src={product.image} alt={product.title} style={{height:112,width:130}}/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
