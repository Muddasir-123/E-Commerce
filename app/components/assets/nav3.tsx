"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav3() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-medium text-gray-800"><Link href="/">Avion</Link></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 text-gray-600">
                        <Link href="#" className="hover:text-gray-800 transition">About us</Link>
                        <Link href="#" className="hover:text-gray-800 transition">Contact</Link>
                        <Link href="#" className="hover:text-gray-800 transition">Blog</Link>
                        <Link href="#" className="hover:text-gray-800 transition">
                            <i className="fas fa-search"></i>
                        </Link>
                        <Link href="#" className="hover:text-gray-800 transition">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link href="#" className="hover:text-gray-800 transition">
                            <i className="fas fa-user"></i>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-sm">
                        <nav className="px-4 py-4 space-y-2 text-gray-600">
                            <Link href="#" className="block hover:text-gray-800 transition">About us</Link>
                            <Link href="#" className="block hover:text-gray-800 transition">Contact</Link>
                            <Link href="#" className="block hover:text-gray-800 transition">Blog</Link>
                            <Link href="#" className="block hover:text-gray-800 transition">
                                <i className="fas fa-search"></i>
                            </Link>
                            <Link href="#" className="block hover:text-gray-800 transition">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                            <Link href="#" className="block hover:text-gray-800 transition">
                                <i className="fas fa-user"></i>
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Product Categories */}
            <div className="bg-gray-50 py-4">
                <div className="container mx-auto px-4 flex space-x-8 text-gray-600 overflow-x-auto">
                <Link href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</Link>
                        <Link href="http://localhost:3000/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</Link>
                        <Link href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</Link>
                        <Link href="http://localhost:3000/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</Link>
                        <Link href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</Link>
                        <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</Link>
                        <Link href="http://localhost:3000/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</Link>
                    <span className="text-red-500">•</span>
                </div>Link
            </div>
        </div>
    );
}
