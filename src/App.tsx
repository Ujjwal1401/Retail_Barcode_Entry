import { useState } from 'react';
import BarcodeScanner from './components/BarcodeScanner';
import ManualEntry from './components/ManualEntry';
import Cart from './components/Cart';
import PaymentOptions from './components/PaymentOptions';
import { findProductByBarcode } from './data/products';
import { CartItem } from './types';
import { ShoppingBag, CheckCircle } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string>('');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddProduct = (barcode: string) => {
    const product = findProductByBarcode(barcode);

    if (!product) {
      showNotification(`Product not found for barcode: ${barcode}`);
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.barcode === barcode);

      if (existingItem) {
        showNotification(`${product.name} quantity increased!`);
        return prevItems.map((item) =>
          item.barcode === barcode
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      showNotification(`Product Added: ${product.name}`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (barcode: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.barcode !== barcode));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      setCartItems([]);
    }
  };

  const handlePaymentComplete = () => {
    showNotification('Payment successful! Thank you for your purchase.');
    setTimeout(() => {
      setCartItems([]);
    }, 2000);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <ShoppingBag size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Retailon Barcode Billing</h1>
          </div>
        </div>
      </header>

      {notification && (
        <div className="fixed top-20 right-4 z-50 animate-bounce">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <CheckCircle size={20} />
            <span className="font-medium">{notification}</span>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <ManualEntry onSubmit={handleAddProduct} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <BarcodeScanner onScan={handleAddProduct} />
          </div>

          <div>
            <Cart
              items={cartItems}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
            {total > 0 && (
              <PaymentOptions total={total} onPaymentComplete={handlePaymentComplete} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
