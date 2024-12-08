import heroImage from "./image/hero.png";
import Image from "next/image";

export const Hero1 = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Image Section */}
            <div className="md:w-1/2 bg-gray-200 flex items-center justify-center">
                <Image
                    src={heroImage}
                    alt="A wooden nightstand with a lamp and other decor items"
                    className="object-cover w-full h-full"
                    layout="intrinsic" // Using intrinsic for better control over image scaling.
                />
            </div>
            
            {/* Text Section */}
            <div className="md:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 bg-white">
                <div className="text-center md:text-left max-w-lg mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight">
                        Homeware that puts quality and style at the heart of its brand
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-700">
                        With our new collection, view over 400 bespoke pieces from homeware through to furniture today
                    </p>
                    <button className="bg-black text-white py-3 px-6 border border-gray-300 rounded-md text-lg hover:bg-gray-800 transition-colors duration-300">
                        View Collection
                    </button>
                </div>
            </div>
        </div>
    );
};
