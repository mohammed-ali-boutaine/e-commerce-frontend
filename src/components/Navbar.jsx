import React, { useState } from "react";
import { ShoppingCart, Menu, X, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">
              YourLogo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/create-product"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
              >
                Create Product
              </Link>
            </div>
          </div>

          {/* Cart & User Actions */}
          <div className="hidden md:flex items-center">
            <Link
              to="/cart"
              className="relative mr-4 text-gray-700 hover:text-blue-600"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </Link>

            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white hover:bg-blue-700 ml-3 px-4 py-2 rounded-md font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/products"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/create-product"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Create Product
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Link to="/cart" className="relative mr-4 text-gray-700">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </Link>
              <Link
                to="/login"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 ml-3 px-4 py-2 rounded-md font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
