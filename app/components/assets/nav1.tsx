"use client";
import { useState } from "react";

function Nav1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-b border-gray-200">
            <div className="flex items-center justify-between py-4 px-6 max-w-screen-xl mx-auto">
                <a href="#" className="text-gray-700">
                    <i className="fa fa-search text-xl"></i>
                </a>
                <h1 className="text-2xl font-medium text-gray-800">Avion</h1>
                <div className="flex items-center space-x-6">
                    <i className="fas fa-shopping-cart text-xl text-gray-700"></i>
                    <i className="fas fa-user text-xl text-gray-700"></i>
                </div>
            </div>
            <hr />
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center space-x-8 py-2 text-gray-600">
                <a href="#" className="hover:text-black text-sm font-medium transition">Plant pots</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Ceramics</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Tables</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Chairs</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Crockery</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Tableware</a>
                <a href="#" className="hover:text-black text-sm font-medium transition">Cutlery</a>
            </div>

            {/* Mobile Dropdown Navigation */}
            <div className="md:hidden flex justify-center py-2">
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-black text-lg flex items-center space-x-1"
                    >
                        <span>...</span>
                        <i className="fas fa-chevron-down"></i>
                    </button>
                    {/* Dropdown Menu */}
                    <div
                        className={`absolute bg-white shadow-lg rounded-md mt-2 w-48 ${isOpen ? 'block' : 'hidden'}`}
                    >
                        <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</a>
                        <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</a>
                        <a href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav1;
