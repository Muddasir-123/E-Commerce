import Image from "next/image";
import backgroundchair from '../assets/image/backgroundchair.jpeg'

export default function Pageheader3() {
    return (
        <div className="relative w-full">
            <Image
                src={backgroundchair}
                alt="Background with wooden elements"
                className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 p-4">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                    All products
                </h1>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"></div>
        </div>
    );
}
