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
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">New arrivals</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Best sellers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Recently viewed</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Popular this week</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">All products</a></li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Crockery</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Furniture</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Homeware</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Plant pots</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Chairs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Crockery</a></li>
                        </ul>
                    </div>

                    {/* Our Company Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-gray-800">Our Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">About us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Vacancies</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Privacy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Returns policy</a></li>
                        </ul>
                    </div>

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
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-skype text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <i className="fab fa-pinterest text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
