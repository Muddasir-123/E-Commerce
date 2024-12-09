import Image from "next/image";
import white from "../assets/image/whiteBackground.jpeg";

const Feature2 = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
                <Image 
                    src={white} 
                    alt="A modern living room with a black sofa, a coffee table, and a vase with dried plants" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
                <div className="max-w-lg space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
    Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
</h1>

                    <p className="text-lg md:text-xl text-gray-700">
                        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
                    </p>
                    <button className="px-8 py-3 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature2