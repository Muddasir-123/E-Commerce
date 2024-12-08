export default function Filter1() {
    return (
        <div className="flex flex-wrap justify-between items-center p-4 bg-white border-t border-gray-200">
            {/* Filter Options */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Category */}
                <div className="relative">
                    <button className="text-sm text-gray-700 hover:text-gray-900 transition duration-200 flex items-center">
                        Category <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                </div>
                {/* Product Type */}
                <div className="relative">
                    <button className="text-sm text-gray-700 hover:text-gray-900 transition duration-200 flex items-center">
                        Product type <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                </div>
                {/* Price */}
                <div className="relative">
                    <button className="text-sm text-gray-700 hover:text-gray-900 transition duration-200 flex items-center">
                        Price <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                </div>
                {/* Brand */}
                <div className="relative">
                    <button className="text-sm text-gray-700 hover:text-gray-900 transition duration-200 flex items-center">
                        Brand <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                </div>
            </div>

            {/* Sorting Options */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span className="text-sm text-gray-700">Sorting by:</span>
                <div className="relative">
                    <button className="text-sm text-gray-700 hover:text-gray-900 transition duration-200 flex items-center">
                        Date added <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
