import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 p-4 flex justify-between items-center">
      <div className="Header-left flex items-center">
        <a href="index.html" className="flipkart text-white text-xl font-bold italic">Flipkart</a>
        <div className="Header-left-p ml-2">
          <p>
            <a href="#" className="text-yellow-500">Explore plus</a>
            <i className="fas fa-plus text-yellow-500 ml-1"></i>
          </p>
        </div>
      </div>
      <div className="Header-center flex-grow mx-4">
        <input
          className="search-box w-full p-2 rounded"
          type="text"
          placeholder=" Search for products, brands and more"
          aria-label="Search"
          id="productSearch"
          onKeyPress={() => searchProducts()}
        />
      </div>
      <div className="Header-right flex items-center">
        <button className="hamburger-menu"></button>
        <div className="menu-items flex items-center">
          <button className="login bg-white text-blue-600 font-bold px-4 py-2 rounded mr-4">Login</button>
          <a href="#" className="menu-item text-white mr-4">Become a Seller</a>
          <a href="#" className="menu-item text-white mr-4">More</a>
          <p>
            <a href="#" className="menu-item text-white mr-2">Cart</a>
            <i className="fa-solid fa-cart-shopping text-white"></i>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;