import Image from "next/image";
import chairshadow from "../assets/image/chairshadiw.jpeg";

export default function Checkout() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-6 lg:p-16 gap-10 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <Image 
                    src={chairshadow} 
                    alt="A stylish black chair with a minimalist design" 
                    className="w-full rounded-xl shadow-lg object-cover" 
                    layout="intrinsic" // To ensure the image scales well
                />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">The Dandy Chair</h1>
                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4">£250</p>

                {/* Product Description */}
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">Product description</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    A timeless design, crafted with premium materials, and features one of our most popular and iconic pieces. The Dandy Chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>

                {/* Dimensions */}
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">Dimensions</h2>
                <div className="flex flex-wrap mb-6 gap-6">
                    <div className="w-1/3 sm:w-auto">
                        <p className="text-gray-600 text-sm">Height</p>
                        <p className="text-gray-800 text-lg">110cm</p>
                    </div>
                    <div className="w-1/3 sm:w-auto">
                        <p className="text-gray-600 text-sm">Width</p>
                        <p className="text-gray-800 text-lg">75cm</p>
                    </div>
                    <div className="w-1/3 sm:w-auto">
                        <p className="text-gray-600 text-sm">Depth</p>
                        <p className="text-gray-800 text-lg">50cm</p>
                    </div>
                </div>

                {/* Quantity Selector */}
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">Quantity</h2>
                <div className="flex items-center mb-6">
                    <button className="border border-gray-300 text-xl text-gray-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300">-</button>
                    <input 
                        type="text" 
                        value="1" 
                        className="w-14 text-xl text-center border-t border-b border-gray-300 mx-4" 
                        readOnly 
                    />
                    <button className="border border-gray-300 text-xl text-gray-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-300">+</button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-6">
                    <button className="bg-purple-800 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition duration-300 w-full sm:w-auto">
                        Add to Cart
                    </button>
                    <button className="border border-gray-300 text-lg px-8 py-3 rounded-xl hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                        Save to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
}
