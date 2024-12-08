import Image from "next/image";
import sofa from "../assets/image/sofa.jpeg";

const Feature1 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 lg:px-16 py-8">
            {/* Text Section */}
            <div className="md:w-1/2 p-6 lg:p-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                    From a studio in London to a global brand with over 400 outlets
                </h1>
                <div className="border border-gray-300 p-6 rounded-lg shadow-md mb-6">
                    <p className="text-gray-700 text-lg mb-4">
                        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
                    </p>
                </div>
                <button className="bg-gray-900 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
                    Get in touch
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image 
                    src={sofa} 
                    alt="A cozy living room with a sofa, cushions, and plants" 
                    className="w-full h-auto rounded-xl shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
                />
            </div>
        </div>
    );
};

export default Feature1;
