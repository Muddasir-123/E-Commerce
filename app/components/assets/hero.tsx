import Image from "next/image";
function Hero() {
    return (
        <div className="font-sans">
            {/* First Section: Hero Form */}
            <section className="flex flex-col items-center justify-center h-screen bg-white p-6 sm:p-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-900">
                    Join the club and get the benefits
                </h1>
                <p className="text-lg sm:text-xl mb-6 text-center text-gray-700">
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                    <input 
                        type="email" 
                        placeholder="you@email.com" 
                        className="border border-gray-300 p-3 w-full sm:w-80 lg:w-96 rounded-md focus:ring-2 focus:ring-gray-500 outline-none transition duration-200"
                    />
                    <button className="bg-gray-800 text-white p-3 w-full sm:w-40 lg:w-48 rounded-md hover:bg-gray-700 transition duration-300">
                        Sign up
                    </button>
                </div>
            </section>

            {/* Second Section: About Company */}
            <section className="flex flex-col md:flex-row items-center justify-between bg-white p-6 sm:p-8">
                {/* Text Section */}
                <div className="md:w-1/2 p-4 sm:p-8 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                        From a studio in London to a global brand with over 400 outlets
                    </h2>
                    <p className="text-lg sm:text-xl mb-4 text-gray-700">
                        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
                    </p>
                    <p className="text-lg sm:text-xl mb-6 text-gray-700">
                        Handcrafted, and lovingly curated furniture and homewares is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
                    </p>
                    <button className="bg-white border border-gray-800 text-gray-800 py-2 px-4 rounded-md text-lg hover:bg-gray-100 transition duration-300">
                        Get in touch
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <Image
                        src="https://placehold.co/720x480" 
                        alt="A cozy living room setup with plants and cushions" 
                        className="w-full h-auto rounded-md shadow-lg transform hover:scale-105 transition duration-300"
                    />
                </div>
            </section>
        </div>
    );
}
export default Hero;
