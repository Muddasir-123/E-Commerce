import chair from '../assets/image/chair1.jpeg'
import Image from "next/image";
function Home() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Section */}
            <div className="bg-[#2E2A5A] text-white flex flex-col justify-center items-start p-6 md:p-12 md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    The furniture brand for the future, with timeless designs
                </h1>
                <button className="bg-gray-700 text-white py-2 px-6 rounded-full mb-4 text-sm md:text-base lg:text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    View Collection
                </button>
                <p className="text-sm md:text-base lg:text-lg">
                    A new era in eco-friendly furniture with Avalon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
                </p>
            </div>

            {/* Right Section */}
            <div className="bg-[#A3C7C9] flex justify-center items-center md:w-1/2 h-full">
                <div className="relative w-full h-full max-w-[600px] mx-auto flex justify-center items-center">
                    <Image
                        src={chair}
                        alt="A modern black chair with wooden legs"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
export default Home