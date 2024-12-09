import Image from "next/image";
import chair from '../assets/image/chair2.png'
const Main = () => {
    return (
        <div className="font-sans">
            {/* First Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-6">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <Image 
                        src={chair} 
                        alt="Modern living room with a black sofa and a plant" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center lg:text-left">
    Our service isn&apos;t just personal, it&apos;s actually hyper personal &amp; exquisite
</h2>

                    <p className="text-gray-600 mb-6 text-center lg:text-left">
                        When we started Fusion, the idea was simple. Make high-quality furniture affordable and available to the mass market.
                    </p>
                    <p className="text-gray-600 mb-6 text-center lg:text-left">
                        Handmade, and lovingly crafted furniture and homewares is what we live for. London interior design store Our Chelsea boutique became the hotbed for the London interior design community.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-white text-black border border-black py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full bg-gray-100 py-10 px-6">
                <h3 className="text-center text-2xl lg:text-3xl font-semibold mb-8">What makes us different</h3>
                <div className="flex flex-wrap justify-center">
                    {/* Service Card 1 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                            <i className="fas fa-shipping-fast text-3xl mb-4 text-gray-800"></i>
                            <h4 className="text-xl font-semibold mb-2">Next day as standard</h4>
                            <p className="text-gray-600">Order before 3pm and get your order the next day as standard</p>
                        </div>
                    </div>
                    
                    {/* Service Card 2 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                            <i className="fas fa-hands text-3xl mb-4 text-gray-800"></i>
                            <h4 className="text-xl font-semibold mb-2">Made by true artisans</h4>
                            <p className="text-gray-600">Handmade crafted goods made with real passion and craftsmanship</p>
                        </div>
                    </div>
                    
                    {/* Service Card 3 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
    <i className="fas fa-tags text-3xl mb-4 text-gray-800"></i>
    <h4 className="text-xl font-semibold mb-2">Unbeatable prices</h4>
    <p className="text-gray-600">For our materials and quality you won&apos;t find better prices anywhere</p>
</div>

                    </div>
                    
                    {/* Service Card 4 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                            <i className="fas fa-recycle text-3xl mb-4 text-gray-800"></i>
                            <h4 className="text-xl font-semibold mb-2">Recycled packaging</h4>
                            <p className="text-gray-600">We use 100% recycled to ensure our footprint is more manageable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
