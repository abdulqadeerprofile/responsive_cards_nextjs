"use client"; // Ensuring client-side rendering

import { FaShoppingCart, FaCaretDown, FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false); // State for Products dropdown
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false); // State for Account dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Functions to toggle dropdowns
  const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleAccountDropdown = () => setIsAccountDropdownOpen(!isAccountDropdownOpen);
  
  // Function to toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      
      <div
        className={`fixed top-0 left-0 w-64 bg-[#1a2b3c] text-white h-full z-50 transform transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center p-4 border-b border-gray-700">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-cover" />
          <h1 className="ml-2 text-lg font-bold text-[#ffcc00]">E COMMERCE</h1>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <button className="text-white hover:text-[#ffcc00]">Home</button>
          <button className="text-white hover:text-[#ffcc00]">About</button>
          <div
            className="relative"
            onClick={toggleProductsDropdown}
          >
            <button className="flex items-center justify-between text-white hover:text-[#ffcc00] w-full">
              <span>Products</span>
              <FaCaretDown
                className={`transition-transform duration-200 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute bg-[#1a2b3c] text-white w-full mt-2 rounded-lg shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Electronics
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Clothing
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Accessories
                </button>
              </div>
            )}
          </div>
          <div
            className="relative"
            onClick={toggleAccountDropdown}
          >
            <button className="flex items-center justify-between text-white hover:text-[#ffcc00] w-full">
              <span>Account</span>
              <FaCaretDown
                className={`transition-transform duration-200 ${
                  isAccountDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAccountDropdownOpen && (
              <div className="absolute bg-[#1a2b3c] text-white w-full mt-2 rounded-lg shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  My Orders
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center p-4 bg-[#1a2b3c] text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" // Correct path to the logo
            alt="Logo"
            width={50}
            height={50}
            className="object-cover"
          />
          <h1 className="text-lg font-bold text-[#ffcc00]">E COMMERCE</h1>
        </div>

        {/* Centered Navigation for Larger Screens */}
        <div className="hidden sm:flex space-x-8">
          <button className="hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">Home</button>
          <button className="hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">About</button>
          
          {/* Products Dropdown for Larger Screens */}
          <div
            className="relative"
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <button className="flex items-center space-x-1 hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
              <span>Products</span>
              <FaCaretDown
                className={`transition-transform duration-200 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute bg-[#1a2b3c] text-white w-40 mt-2 rounded-lg shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Electronics
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Clothing
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Accessories
                </button>
              </div>
            )}
          </div>
          
          {/* Account Dropdown for Larger Screens */}
          <div
            className="relative"
            onMouseEnter={toggleAccountDropdown}
            onMouseLeave={toggleAccountDropdown}
          >
            <button className="flex items-center space-x-1 hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
              <span>Account</span>
              <FaCaretDown
                className={`transition-transform duration-200 ${
                  isAccountDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAccountDropdownOpen && (
              <div className="absolute bg-[#1a2b3c] text-white w-40 mt-2 rounded-lg shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  My Orders
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#ffcc00] hover:text-black">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="sm:hidden">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Buy Now Icon */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-xl hover:text-[#ffcc00] cursor-pointer transition-all duration-300 hover:scale-110" />
        </div>
      </div>
    </>
  );
}
