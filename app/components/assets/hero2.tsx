import Image from "next/image";
export const Hero = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-100">
            <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                    src="https://placehold.co/1600x900" 
                    alt="A modern wooden nightstand with a lamp and decorative items" 
                    className="w-full h-full object-cover"
                />
                {/* Centered Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 shadow-lg rounded-lg max-w-xl w-full text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                            Luxury homeware for people who love <span className="font-bold text-red-500">timeless</span> design quality
                        </h1>
                        <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl">
                            Shop the new Spring 2022 collection today
                        </p>
                        <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors duration-300">
                            View Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
