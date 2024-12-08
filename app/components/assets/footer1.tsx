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
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">New arrivals</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Best sellers</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Recently viewed</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Popular this week</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">All products</a></li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Crockery</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Furniture</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Homeware</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Plant pots</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Chairs</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Crockery</a></li>
                        </ul>
                    </div>

                    {/* Our Company Section */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl">Our Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">About us</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Vacancies</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Contact us</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Returns policy</a></li>
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
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-skype text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
                            <i className="fab fa-pinterest text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
