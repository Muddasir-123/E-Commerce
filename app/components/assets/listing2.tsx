import Image from "next/image";
import bottle from '../assets/image/bottle.png';
import chair1 from '../assets/image/chair1.jpeg';
import lamp from '../assets/image/lamp.png';
import mudBottles from '../assets/image/mudbottles.png';

export const Listing2 = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold mb-8 text-center">New Ceramics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={chair1}
                            alt="A modern chair with wooden legs"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mt-4">The Dandy Chair</h2>
                    <p className="text-gray-600 text-xl">£250</p>
                </div>
                <div className="text-center">
                    <div className="h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={mudBottles}
                            alt="A set of rustic vases on a table"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mt-4">Rustic Vase Set</h2>
                    <p className="text-gray-600 text-xl">£155</p>
                </div>
                <div className="text-center">
                    <div className="h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={bottle}
                            alt="A sleek, modern vase on a table"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mt-4">The Silky Vase</h2>
                    <p className="text-gray-600 text-xl">£125</p>
                </div>
                <div className="text-center">
                    <div className="h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={lamp}
                            alt="A modern hanging lamp"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mt-4">The Lucy Lamp</h2>
                    <p className="text-gray-600 text-xl">£399</p>
                </div>
            </div>
            <div className="text-center mt-12">
                <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out">View Collection</button>
            </div>
        </div>
    );
};
