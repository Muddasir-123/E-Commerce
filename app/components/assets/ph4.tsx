export default function Pageheader4() {
    return (
        <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-8">View all products</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-800">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base">Category</span>
                    <i className="fas fa-chevron-down text-xs sm:text-sm"></i>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base">Product type</span>
                    <i className="fas fa-chevron-down text-xs sm:text-sm"></i>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base">Price</span>
                    <i className="fas fa-chevron-down text-xs sm:text-sm"></i>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base">Brand</span>
                    <i className="fas fa-chevron-down text-xs sm:text-sm"></i>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base">Sorting by:</span>
                    <span className="hidden sm:inline">Date added</span>
                    <i className="fas fa-chevron-down text-xs sm:text-sm"></i>
                </div>
            </div>
        </div>
    );
}
