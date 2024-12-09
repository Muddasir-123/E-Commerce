import Image from "next/image";
const products = [
    {
        name: "The Dandy Chair",
        price: "£250",
        image: "https://placehold.co/300x400?text=The+Dandy+Chair",
        alt: "A set of modern hanging lamps in a warm, golden color."
    },
    {
        name: "Rustic Vase Set",
        price: "£155",
        image: "https://placehold.co/300x400?text=Rustic+Vase+Set",
        alt: "A set of rustic vases in a minimalist setting."
    },
    {
        name: "The Silky Vase",
        price: "£125",
        image: "https://placehold.co/300x400?text=The+Silky+Vase",
        alt: "A single vase in front of a bright yellow background."
    },
    {
        name: "The Lucy Lamp",
        price: "£399",
        image: "https://placehold.co/300x400?text=The+Lucy+Lamp",
        alt: "A set of modern chairs in a dimly lit room."
    }
];

export default function Listing5() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-64 relative rounded-lg overflow-hidden bg-gray-100 mb-4">
                            <Image
                                src={product.image}
                                alt={product.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                        <p className="text-xl font-medium text-gray-600 mt-2">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
