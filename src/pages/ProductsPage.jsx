import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/products";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // If using auth
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
     <>
     
     <div className="container mx-auto px-4 py-8">
     <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

     {products.map((product,i) => (
           <ProductCard product={product} key={i} />
          ))}  
           </div>
           </div>

     </>
  );
}

export default ProductList;
