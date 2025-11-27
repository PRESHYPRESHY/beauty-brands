import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const JordanGrid = ({products}) => {
  const navigate = useNavigate ();

  const handleAddToCart = (productId, e) => {
    e.stopPropagation (); // prevents card click navigation
    console.log (`Added product ${productId} to cart`);
  };

  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map (product => (
          <div
            key={product.id}
            onClick={() => navigate (`/${product.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-3 cursor-pointer group"
          >
            {/* PRODUCT IMAGE */}
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition"
              />

              {/* PRODUCT TAG */}
              {product.tag &&
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-xs uppercase font-bold rounded-md ${product.tag === 'new' ? 'bg-green-600 text-white' : product.tag === 'popular' ? 'bg-red-600 text-white' : 'bg-black text-white'}`}
                >
                  {product.tag}
                </span>}
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-3">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {product.name}
              </h3>

              {/* PRICE + RATING */}
              {(product.price || product.rating) &&
                <div className="flex items-center justify-between text-gray-600 text-sm mt-1">
                  {product.price &&
                    <span className="font-bold text-black">
                      ${product.price}
                    </span>}
                  {product.rating &&
                    <span className="opacity-70">★ {product.rating}</span>}
                </div>}

              {/* ADD BUTTON */}
              {product.hasAddButton
                ? <button
                    className="w-full bg-black text-white py-2 rounded-lg mt-3 text-sm font-medium hover:bg-gray-900 transition"
                    onClick={e => handleAddToCart (product.id, e)}
                  >
                    Add
                  </button>
                : <div className="w-full py-2 mt-3 text-center text-gray-400 text-sm">
                    {product.id === 8 ? 'Search' : ''}
                  </div>}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default JordanGrid;
