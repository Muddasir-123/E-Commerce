import Image from "next/image";
import bottle from '../assets/image/bottle.png';
import lamp from '../assets/image/lamp.png';
import chair from '../assets/image/chair1.jpeg';
import mudBottles from '../assets/image/mudbottles.png';

export function Listing3() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image 
                            src={chair} 
                            alt="A stylish black chair with wooden legs against a teal background"
                            layout="fill" 
                            objectFit="contain" 
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">The Dandy Chair</h2>
                    <p className="mt-2 text-gray-600 text-xl">£250</p>
                </div>

                <div className="text-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image 
                            src={mudBottles} 
                            alt="A set of rustic vases on a concrete pedestal against a beige background"
                            layout="fill" 
                            objectFit="contain" 
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">Rustic Vase Set</h2>
                    <p className="mt-2 text-gray-600 text-xl">£155</p>
                </div>

                <div className="text-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image 
                            src={bottle} 
                            alt="A sleek, tall vase on a white surface against a dark grey background"
                            layout="fill" 
                            objectFit="contain" 
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">The Silky Vase</h2>
                    <p className="mt-2 text-gray-600 text-xl">£125</p>
                </div>

                <div className="text-center">
                    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <Image 
                            src={lamp} 
                            alt="A modern hanging lamp with a black shade and warm light against a blue background"
                            layout="fill" 
                            objectFit="contain" 
                        />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">The Lucy Lamp</h2>
                    <p className="mt-2 text-gray-600 text-xl">£399</p>
                </div>
            </div>
        </div>
    );
}
