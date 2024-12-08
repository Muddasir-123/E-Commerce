const Sign2 = () => {
    return (
        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md text-center max-w-xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Join the club and get the benefits
            </h1>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="p-3 border border-gray-300 rounded-lg w-80 sm:w-64 focus:outline-none"
                />
                <button className="bg-[#2A254B] text-white p-3 rounded-lg w-80 sm:w-auto">Sign up</button>
            </div>
        </div>
    );
};

export default Sign2;
