function Banner2() {
    return (
        <div className="relative bg-white border-t-4 border-purple-600">
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-shipping-fast text-purple-600"></i>
                    <span className="text-sm text-gray-700">Free delivery on all orders over £50 with code easter checkout</span>
                </div>
                <button className="text-gray-700">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
}

