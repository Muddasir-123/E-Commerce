import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#2A254B] text-gray-300 py-8">
            <div className="container mx-auto px-4">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    
                    {/* Address Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Avion</h2>
                        <address className="not-italic mb-4 text-sm">
                            21 New York Street<br />
                            New York City<br />
                            United States of America<br />
                            432 34
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Social Links</h2>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-linkedin text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-facebook text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-instagram text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-skype text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-twitter text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fab fa-pinterest text-xl"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Menu</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white">New arrivals</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Best sellers</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Recently viewed</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Popular this week</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">All products</Link></li>
                        </ul>
                    </div>

                    {/* Categories Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Categories</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white">Crockery</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Furniture</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Homeware</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Plant pots</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Chairs</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Crockery</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Our Company</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white">About us</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Vacancies</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Contact us</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Privacy</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Returns policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                    <p>Copyright &copy; 2022 Avion LTD</p>
                </div>
            </div>
        </footer>
    );
}
