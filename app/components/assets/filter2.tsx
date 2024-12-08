export default function Filter2() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {/* Filters Button */}
                <div className="bg-gray-100 px-6 py-3 rounded-md shadow-lg flex items-center justify-center hover:bg-gray-200 transition duration-200 cursor-pointer">
                    <span className="text-sm md:text-base text-gray-700 font-medium mr-2">Filters</span>
                    <i className="fas fa-chevron-down text-gray-700"></i>
                </div>

                {/* Sorting Button */}
                <div className="bg-gray-100 px-6 py-3 rounded-md shadow-lg flex items-center justify-center hover:bg-gray-200 transition duration-200 cursor-pointer">
                    <span className="text-sm md:text-base text-gray-700 font-medium mr-2">Sorting</span>
                    <i className="fas fa-chevron-down text-gray-700"></i>
                </div>
            </div>
        </div>
    );
}
