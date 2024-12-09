import Image from "next/image";
import wall from '../assets/image/whiteBackground.jpeg'
export default function Sign1() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Image Section */}
            <div className="flex-1 bg-gray-100">
                <Image
                    src={wall} 
                    alt="A modern living room with a black sofa and a vase with branches" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Sign-up Section */}
            <div className="flex-1 flex items-center justify-center bg-white p-6 sm:p-8">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                        Join the club and get the benefits
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                    </p>
                    <form className="flex">
                        <input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none text-sm sm:text-base"
                        />
                        <button 
                            type="submit" 
                            className="bg-gray-800 text-white p-3 rounded-r-md text-sm sm:text-base"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
