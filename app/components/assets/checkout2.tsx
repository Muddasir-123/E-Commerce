export default function Checkout2() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-6 lg:p-16 gap-10 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img 
                    src="https://placehold.co/600x600" 
                    alt="A black metal chair with a minimalist design" 
                    className="max-w-full h-auto rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
                />
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-1/2 lg:pl-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    The Dandy Chair
                </h1>
                <p className="text-2xl md:text-3xl text-gray-800 font-medium mb-8">£250</p>
                
                {/* Description Section */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Description</h2>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        A timeless design, crafted with premium materials, featuring one of our most popular and iconic pieces. The Dandy Chair is perfect for any stylish living space, with beech legs and lambskin leather upholstery.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>
                
                {/* Dimensions Section */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Dimensions</h2>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col items-center text-gray-700">
                            <p className="text-sm sm:text-base">Height</p>
                            <p className="text-gray-900 font-semibold text-xl sm:text-2xl">110cm</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-700">
                            <p className="text-sm sm:text-base">Width</p>
                            <p className="text-gray-900 font-semibold text-xl sm:text-2xl">75cm</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-700">
                            <p className="text-sm sm:text-base">Depth</p>
                            <p className="text-gray-900 font-semibold text-xl sm:text-2xl">50cm</p>
                        </div>
                    </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center mb-8">
                    <p className="text-gray-700 text-lg sm:text-xl mr-4">Amount</p>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">-</button>
                        <input 
                            type="text" 
                            value="1" 
                            className="w-12 text-center text-xl font-semibold text-gray-900 border-none focus:outline-none" 
                            readOnly 
                        />
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out">+</button>
                    </div>
                </div>

                {/* Action Button */}
                <button className="bg-gray-900 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out w-full sm:w-auto">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
