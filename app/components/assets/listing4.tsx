import Image from "next/image";
export const Listing4 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image
                            src="https://placehold.co/300x400"
                            alt="A stylish black chair with wooden legs"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-gray-900">The Dandy Chair</h2>
                    <p className="mt-2 text-gray-600 text-xl">£250</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <img
                            src="https://placehold.co/300x400"
                            alt="A set of rustic vases on a concrete pedestal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-gray-900">Rustic Vase Set</h2>
                    <p className="mt-2 text-gray-600 text-xl">£155</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <img
                            src="https://placehold.co/300x400"
                            alt="A tall, sleek vase on a white surface"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-gray-900">The Silky Vase</h2>
                    <p className="mt-2 text-gray-600 text-xl">£125</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image
                            src="https://placehold.co/300x400"
                            alt="A modern hanging lamp with a blue background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-gray-900">The Lucy Lamp</h2>
                    <p className="mt-2 text-gray-600 text-xl">£399</p>
                </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md shadow-md hover:bg-gray-300 transition duration-200 ease-in-out">
                View Collection
            </button>
        </div>
    );
};
