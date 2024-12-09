const Pageheader2 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 md:px-8">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
                    A brand built on the love of craftsmanship, quality, and outstanding customer service
                </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
                <button className="bg-white text-gray-800 py-2 px-6 md:px-8 border border-gray-200 rounded shadow-sm hover:shadow-md transition duration-300">
                    View our products
                </button>
            </div>
        </div>
    );
};
export default Pageheader2;