import Image from "next/image";
import whitebottle from '../assets/image/whitebottle.jpeg';
import tree from '../assets/image/tree.jpeg';

export default function ShoppingCart1() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your shopping cart</h1>
            <div className="border-b border-gray-200 pb-2 mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-500">
                    <div>Product</div>
                    <div className="text-center">Quantity</div>
                    <div className="text-right">Total</div>
                </div>
            </div>
            <div className="space-y-4">
                {/* Product 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center space-x-4">
                        <Image src={whitebottle} alt="Graystone vase" className="w-24 h-24 object-cover"/>
                        <div>
                            <h2 className="text-lg font-bold">Graystone vase</h2>
                            <p className="text-gray-500">A timeless ceramic vase with a tri color grey glaze.</p>
                            <p className="text-gray-800">£85</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center border border-gray-300 rounded">
                            <button className="px-2 py-1 text-gray-500">-</button>
                            <input type="text" value="1" className="w-12 text-center border-0 focus:ring-0"/>
                            <button className="px-2 py-1 text-gray-500">+</button>
                        </div>
                    </div>
                    <div className="text-right text-gray-800">£85</div>
                </div>

                {/* Product 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center space-x-4">
                        <Image src={tree} alt="Basic white vase" className="w-24 h-24 object-cover"/>
                        <div>
                            <h2 className="text-lg font-bold">Basic white vase</h2>
                            <p className="text-gray-500">Beautiful and simple this is one for the classics</p>
                            <p className="text-gray-800">£125</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center border border-gray-300 rounded">
                            <button className="px-2 py-1 text-gray-500">-</button>
                            <input type="text" value="1" className="w-12 text-center border-0 focus:ring-0"/>
                            <button className="px-2 py-1 text-gray-500">+</button>
                        </div>
                    </div>
                    <div className="text-right text-gray-800">£125</div>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-end space-x-4">
                    <div className="text-right">
                        <p className="text-gray-500">Subtotal</p>
                        <p className="text-2xl font-bold">£210</p>
                        <p className="text-gray-500">Taxes and shipping are calculated at checkout</p>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Go to checkout</button>
                </div>
            </div>
        </div>
    );
}