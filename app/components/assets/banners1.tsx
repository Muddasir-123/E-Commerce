export default function Banner() {
    return (
        <div className="bg-[#2E2459] text-white flex justify-between items-center p-4 md:p-3 lg:p-6">
            <div className="flex items-center space-x-3 text-xs sm:text-sm md:text-base lg:text-lg">
                <i className="fas fa-shipping-fast text-2xl sm:text-3xl md:text-4xl"></i>
                <span className="font-medium text-sm sm:text-base">
                    Free delivery on all orders over £50 with code easter at checkout
                </span>
            </div>
            <div className="cursor-pointer">
                <i className="fas fa-times text-xl sm:text-2xl md:text-3xl"></i>
            </div>
        </div>
    );
}
