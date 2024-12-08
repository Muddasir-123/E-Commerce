const Feature4 = () => {
    return (
        <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
                What makes our brand different
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {/* Feature 1 */}
                <div className="bg-white p-6 text-center shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <i className="fas fa-shipping-fast text-4xl text-gray-800 mb-4"></i>
                    <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                        Next day as standard
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        Order before 3pm and get your order the next day as standard
                    </p>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-6 text-center shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <i className="fas fa-check-circle text-4xl text-gray-800 mb-4"></i>
                    <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                        Made by true artisans
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        Handmade crafted goods made with real passion and craftsmanship
                    </p>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-6 text-center shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <i className="fas fa-tags text-4xl text-gray-800 mb-4"></i>
                    <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                        Unbeatable prices
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        For our materials and quality you won't find better prices anywhere
                    </p>
                </div>
                {/* Feature 4 */}
                <div className="bg-white p-6 text-center shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <i className="fas fa-recycle text-4xl text-gray-800 mb-4"></i>
                    <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                        Recycled packaging
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        We use 100% recycled packaging to ensure our footprint is more manageable
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Feature4;
