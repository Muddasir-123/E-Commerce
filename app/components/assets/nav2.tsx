"use client";
import { useState } from "react";

export default function Nav2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* Logo */}
                <div className="text-2xl font-semibold text-gray-800">Avion</div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-6 text-gray-500">
                    <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</a>
                        <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</a>
                        <a href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</a>
                    </nav>
                    <div className="flex items-center space-x-6 text-gray-500">
                        <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-search"></i></a>
                        <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-shopping-cart"></i></a>
                        <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-user"></i></a>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4 text-gray-500">
                    <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</a>
                        <a href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</a>
                        <a href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</a>
                        <a href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</a>
                        <a href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</a>
                        <div className="flex items-center space-x-6 text-gray-500">
                            <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-search"></i></a>
                            <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-user"></i></a>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
