import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {products} from '../../data/products';

const ClotheDetails = () => {
  const {id} = useParams ();
  const product = products.find (item => item.id === parseInt (id));
  const navigate = useNavigate ();

  if (!product)
    return (
      <p className="text-center text-red-600 text-xl font-semibold mt-20">
        Product Not Found
      </p>
    );

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-16 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-80 md:h-[450px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col space-y-4">

          <h2 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h2>

          <p className="text-2xl font-semibold text-black">
            ${product.price}
          </p>

          <p className="text-lg text-yellow-600 font-medium">
            ⭐ {product.rating}
          </p>

          {product.tag &&
            <span
              className={`inline-block px-3 py-1 text-sm text-white rounded-md capitalize 
                ${product.tag === 'new' ? 'bg-green-600' : product.tag === 'popular' ? 'bg-red-600' : 'bg-black'}`}
            >
              {product.tag}
            </span>}

          <p className="text-gray-600 leading-relaxed">
            This premium {product.name} is crafted with high-quality materials
            designed for comfort, durability, and modern style. Perfect for both
            indoor and outdoor wear, offering flexibility and a bold look that
            stands out anywhere.
          </p>

          {/* COLORS */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Available Colors:
            </p>
            <div className="flex space-x-3">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-sm">
                Red
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
                Purple
              </span>
              <span className="px-3 py-1 rounded-full bg-black text-white text-sm">
                Black
              </span>
            </div>
          </div>

          {/* SIZES */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">Sizes:</p>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL'].map (size => (
                <span
                  key={size}
                  className="px-3 py-1 rounded-full border border-gray-400 text-gray-700 text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* STOCK */}
          <p className="text-green-600 font-semibold text-lg">✅ In Stock</p>

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate (-1)}
            className="w-full md:w-auto bg-black text-white py-2 px-6 rounded-lg mt-4 hover:bg-gray-900 transition"
          >
            ⬅ Back
          </button>

        </div>
      </div>
    </div>
  );
};

export default ClotheDetails;
