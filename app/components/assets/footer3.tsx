import Link from "next/link";

export default function Footer3() {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Menu Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Menu</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">New arrivals</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Best sellers</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Recently viewed</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Popular this week</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">All products</Link></li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Categories</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Crockery</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Furniture</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Homeware</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Plant pots</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Chairs</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Crockery</Link></li>
                        </ul>
                    </div>

                    {/* Our Company Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Our Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">About us</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Vacancies</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact us</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Privacy</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Returns policy</Link></li>
                        </ul>
                    </div>LinkLink

                    {/* Mailing List Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Join our mailing list</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="p-3 border border-gray-300 rounded-l-md w-full sm:w-72 mb-4 sm:mb-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            />
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md mt-4 sm:mt-0 sm:w-32 hover:bg-gray-700 transition-colors duration-200">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm sm:text-base">&copy; 2022 Avion LTD</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-linkedin text-xl"></i>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-facebook text-xl"></i>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-instagram text-xl"></i>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-skype text-xl"></i>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-twitter text-xl"></i>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-pinterest text-xl"></i>
                        </Link>
                    </div>
                </div>Link
            </div>
        </footer>
    );
}
