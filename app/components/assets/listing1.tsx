import Image from "next/image";
import sofa from '../assets/image/sofa.png'
import chair from '../assets/image/chair1.jpeg'
import chair2 from '../assets/image/stickchair.png'

export const Listing1 = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
                Our Popular Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <Image src={sofa} alt="Green suede sofa" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">The Popular Suede Sofa</h2>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">£980</p>
                </div>
                <div className="text-center">
                    <Image src={chair} alt="Black chair with wooden legs" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">The Dandy Chair</h2>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">£250</p>
                </div>
                <div className="text-center">
                    <Image src={chair2} alt="Black wooden chair" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">The Stick Chair</h2>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">£250</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md text-sm sm:text-base transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105">
                    View Collection
                </button>
            </div>
        </div>
    );
};
