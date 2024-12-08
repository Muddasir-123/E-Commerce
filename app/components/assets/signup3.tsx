export default function App4() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            {/* Background Image */}
            <img 
                src="https://placehold.co/1920x1080" 
                alt="Background with a shadow on a wall" 
                className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 text-center text-white p-6 sm:p-8 lg:p-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                    Join the club and get the benefits
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6">
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                    <div className="flex items-center">
                        <i className="fas fa-circle text-xs sm:text-sm mr-2"></i>
                        <span className="text-sm sm:text-base">Exclusive offers</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-circle text-xs sm:text-sm mr-2"></i>
                        <span className="text-sm sm:text-base">Free events</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-circle text-xs sm:text-sm mr-2"></i>
                        <span className="text-sm sm:text-base">Large discounts</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="p-3 w-64 sm:w-80 md:w-96 text-gray-900 rounded-l-md focus:outline-none"
                    />
                    <button className="bg-gray-800 text-white p-3 rounded-r-md w-32 sm:w-40 md:w-48">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
