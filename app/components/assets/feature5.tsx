import Image from "next/image";
import sofa from '../assets/image/yellowsofa.jpeg';

const Feature5 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-16 py-12">
            {/* Text Content */}
            <div className="bg-[#2E265A] text-white p-8 sm:p-12 md:w-1/2 flex flex-col justify-center items-start rounded-lg shadow-lg max-w-lg mx-auto md:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 leading-snug">
                    It started with a small idea
                </h1>
                <p className="text-lg sm:text-xl font-light mb-8 leading-relaxed">
                    A global brand with local beginnings, our story began in a small studio 
                    in South London in early 2014.
                </p>
                <button className="bg-[#4A3F6B] hover:bg-[#594c7c] transition-colors duration-300 text-white py-2 px-6 rounded-lg shadow-md transform hover:scale-105 focus:outline-none">
                    View collection
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0">
                <Image
                    src={sofa}
                    alt="A modern living room with a yellow chair, a floor lamp, and a framed artwork on the wall"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    priority
                />
            </div>
        </div>
    );
};

export default Feature5;
