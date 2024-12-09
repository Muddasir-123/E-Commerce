"use client";
import Link from "next/link";
import { useState } from "react";

function Nav1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-b border-gray-200">
            <div className="flex items-center justify-between py-4 px-6 max-w-screen-xl mx-auto">
                <Link href="#" className="text-gray-700">
                    <i className="fa fa-search text-xl"></i>
                </Link>
                <h1 className="text-2xl font-medium text-gray-800">
                    <Link href="/">Avion</Link></h1>
                <div className="flex items-center space-x-6">
                    <i className="fas fa-shopping-cart text-xl text-gray-700"></i>
                    <i className="fas fa-user text-xl text-gray-700"></i>
                </div>
            </div>
            <hr />
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center space-x-8 py-2 text-gray-600">
                <Link href="/shopping" className="hover:text-black text-sm font-medium transition">Plant pots</Link>
                <Link href="/shopping" className="hover:text-black text-sm font-medium transition">Ceramics</Link>
                <Link href="/Products" className="hover:text-black text-sm font-medium transition">Tables</Link>
                <Link href="/Products" className="hover:text-black text-sm font-medium transition">Chairs</Link>
                <Link href="/shopping" className="hover:text-black text-sm font-medium transition">Crockery</Link>
                <Link href="/Products" className="hover:text-black text-sm font-medium transition">Tableware</Link>
                <Link href="/shopping" className="hover:text-black text-sm font-medium transition">Cutlery</Link>
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
                        <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Plant pots</Link>
                        <Link href="/shopping" className="block px-4 py-2 text-gray-600 hover:text-black">Ceramics</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Tables</Link>
                        <Link href="/Products" className="block px-4 py-2 text-gray-600 hover:text-black">Chairs</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Crockery</Link>
                        <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-black">Tableware</Link>
                        <Link href="/ProductListing" className="block px-4 py-2 text-gray-600 hover:text-black">Cutlery</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav1;
