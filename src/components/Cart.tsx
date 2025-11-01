import { Trash2, X, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemoveItem: (barcode: string) => void;
  onClearCart: () => void;
}

const Cart = ({ items, onRemoveItem, onClearCart }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart size={24} />
          Cart ({items.length})
        </h2>
        {items.length > 0 && (
          <button
            onClick={onClearCart}
            className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          Your cart is empty. Start scanning products!
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 px-2 text-sm font-semibold text-gray-700">Product</th>
                  <th className="text-center py-2 px-2 text-sm font-semibold text-gray-700">Price</th>
                  <th className="text-center py-2 px-2 text-sm font-semibold text-gray-700">Qty</th>
                  <th className="text-right py-2 px-2 text-sm font-semibold text-gray-700">Subtotal</th>
                  <th className="py-2 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.barcode} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2">
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.category}</div>
                    </td>
                    <td className="text-center py-3 px-2 text-gray-700">₹{item.price}</td>
                    <td className="text-center py-3 px-2">
                      <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm">
                        {item.quantity}
                      </span>
                    </td>
                    <td className="text-right py-3 px-2 font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button
                        onClick={() => onRemoveItem(item.barcode)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t-2 border-gray-300">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Grand Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{total}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
