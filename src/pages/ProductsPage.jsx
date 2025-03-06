import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/products";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: `Bearer YOUR_ACCESS_TOKEN`, // If using auth
            }
        })
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="p-4 border rounded">
                    <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover" />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="text-green-600 font-bold">${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
