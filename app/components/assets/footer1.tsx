import Link from "next/link";

export default function Footer1() {
    return (
        <footer className="bg-[#2A254B] text-white py-8">
            <div className="container mx-auto px-4">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Menu Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Menu</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">New arrivals</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Best sellers</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Recently viewed</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Popular this week</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">All products</Link></li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Categories</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Crockery</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Furniture</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Homeware</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Plant pots</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Chairs</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Crockery</Link></li>
                        </ul>
                    </div>

                    {/* Our Company Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Our Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">About us</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Vacancies</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-gray-400 transition-colors duration-200">Returns policy</Link></li>
                        </ul>
                    </div>

                    {/* Mailing List Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Join our mailing list</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                            <button className="p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-center sm:text-left">&copy; 2022 Avion LTD</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-linkedin text-xl"></i>
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-facebook text-xl"></i>
                        </Link>Link
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-instagram text-xl"></i>
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-skype text-xl"></i>
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-twitter text-xl"></i>
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-pinterest text-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}