
const ProductCard = ({ product }) => {
  return (
<>
        <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="relative overflow-hidden">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
              {product.discountPercentage ? `${product.discountPercentage}% OFF` : 'NEW'}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
              <div className="flex items-center text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">{product.rating || "4.5"}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-green-600 font-bold text-lg">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transition">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {product.location || "Free shipping"}
            </div>
            <div className="text-sm text-gray-500">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </div>
          </div>
        </div>
        </>

  );
};

export default ProductCard;