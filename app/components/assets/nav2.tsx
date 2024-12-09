"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* Logo */}
                <div className="text-2xl font-semibold text-gray-800"><Link href="/">Avion</Link></div>

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
                    <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</Link>
                        <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</Link>
                        <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</Link>
                    </nav>
                    <div className="flex items-center space-x-6 text-gray-500">
                        <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-search"></i></Link>
                        <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-shopping-cart"></i></Link>
                        <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-user"></i></Link>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4 text-gray-500">
                    <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</Link>
                        <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</Link>
                        <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</Link>
                        <div className="flex items-center space-x-6 text-gray-500">
                            <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-search"></i></Link>
                            <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-shopping-cart"></i></Link>
                            <Link href="#" className="hover:text-gray-800 text-xl"><i className="fas fa-user"></i></Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
