import React, {useState} from 'react';


import tweleve from '/public/images/l.jpg';
import thirteen from '/public/images/m.jpg';
import fourteen from '/public/images/n.jpg';

const productsData = [
  {
    id: 1,
    name: 'Air Jordan 1 Retro',
    price: 250,
    tag: 'New',
    category: 'Sneakers',
    image: tweleve,
  },
  {
    id: 2,
    name: 'Purple Hoodie',
    price: 80,
    tag: 'Popular',
    category: 'Apparel',
    image: thirteen,
  },
  {
    id: 3,
    name: 'Crimson Cap',
    price: 40,
    tag: 'New',
    category: 'Accessories',
    image: fourteen,
  },
  {
    id: 4,
    name: 'Galaxy Sneakers',
    price: 210,
    tag: 'Hot',
    category: 'Sneakers',
    image: tweleve,
  },
];

const Shop = () => {
  const [search, setSearch] = useState ('');
  const [filter, setFilter] = useState ('All');

  const filteredProducts = productsData.filter (p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.name
      .toLowerCase ()
      .includes (search.toLowerCase ());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">

      {/* ===== NAVBAR ===== */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-black text-white shadow">
        <h1 className="text-xl font-bold tracking-wide">Crimson Store</h1>

        <ul className="hidden sm:flex space-x-6 font-medium">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="text-red-400 font-semibold">Shop</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
          Cart (0)
        </button>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Shop the Heat 🔥
          </h1>
          <p className="text-gray-600 mt-3">
            Discover limited-edition sneakers and streetwear.
          </p>
          <button className="mt-5 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={tweleve}
            alt="Hero Sneaker"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ===== SEARCH + FILTER ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-4 pb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch (e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg"
        />

        <select
          value={filter}
          onChange={e => setFilter (e.target.value)}
          className="w-full md:w-48 px-4 py-2 border rounded-lg"
        >
          <option value="All">All</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Apparel">Apparel</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Featured Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map (item => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* TAG */}
                <span
                  className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md text-white ${item.tag === 'New' ? 'bg-green-600' : item.tag === 'Popular' ? 'bg-blue-600' : 'bg-red-600'}`}
                >
                  {item.tag}
                </span>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">{item.name}</h3>

                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span className="font-bold text-black">${item.price}</span>
                  <span>⭐ 4.7</span>
                </div>

                <button className="w-full bg-black text-white py-2 rounded-lg mt-3 hover:bg-gray-900 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center px-6 py-12 bg-black text-white">
        <h2 className="text-3xl font-extrabold">Join the Crimson Club 💎</h2>
        <p className="text-gray-300 mt-2">
          Sign up to receive early access to new drops & exclusive discounts.
        </p>
        <button className="mt-5 bg-red-500 px-5 py-3 rounded-lg hover:bg-red-600 transition">
          Join Now
        </button>
      </footer>

    </div>
  );
};

export default Shop;
