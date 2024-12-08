import { FaShippingFast, FaCheckCircle, FaTags, FaRecycle } from 'react-icons/fa';

function Feature3() {
    return (
        <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center leading-tight">
                What makes our brand different
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                    <FaShippingFast className="text-4xl text-gray-800 mb-4" />
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Next day as standard</h2>
                    <p className="text-gray-600 mt-2 text-sm text-center">
                        Order before 3pm and get your order the next day as standard
                    </p>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                    <FaCheckCircle className="text-4xl text-gray-800 mb-4" />
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Made by true artisans</h2>
                    <p className="text-gray-600 mt-2 text-sm text-center">
                        Handmade crafted goods made with real passion and craftsmanship
                    </p>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                    <FaTags className="text-4xl text-gray-800 mb-4" />
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Unbeatable prices</h2>
                    <p className="text-gray-600 mt-2 text-sm text-center">
                        For our materials and quality, you won't find better prices anywhere
                    </p>
                </div>
                {/* Feature 4 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                    <FaRecycle className="text-4xl text-gray-800 mb-4" />
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Recycled packaging</h2>
                    <p className="text-gray-600 mt-2 text-sm text-center">
                        We use 100% recycled packaging to ensure our footprint is manageable
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Feature3;
