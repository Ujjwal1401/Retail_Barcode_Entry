import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CreditCard, Banknote, X, CheckCircle } from 'lucide-react';

interface PaymentOptionsProps {
  total: number;
  onPaymentComplete: () => void;
}

const PaymentOptions = ({ total, onPaymentComplete }: PaymentOptionsProps) => {
  const [showUpiQr, setShowUpiQr] = useState(false);
  const [showCashConfirm, setShowCashConfirm] = useState(false);

  const upiLink = `upi://pay?pa=retailon@upi&pn=Retailon&am=${total}&cu=INR`;

  const handleCashPayment = () => {
    setShowCashConfirm(true);
    setTimeout(() => {
      setShowCashConfirm(false);
      onPaymentComplete();
    }, 2000);
  };

  const handleUpiPayment = () => {
    setShowUpiQr(true);
  };

  const closeUpiModal = () => {
    setShowUpiQr(false);
  };

  if (total === 0) {
    return null;
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleUpiPayment}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            <CreditCard size={24} />
            Pay via UPI (QR Code)
          </button>

          <button
            onClick={handleCashPayment}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            <Banknote size={24} />
            Cash Payment
          </button>
        </div>
      </div>

      {showUpiQr && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Scan to Pay</h3>
              <button
                onClick={closeUpiModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg border-4 border-green-500">
                <QRCodeSVG value={upiLink} size={200} level="H" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-2xl font-bold text-gray-800">₹{total}</p>
                <p className="text-sm text-gray-600 mt-2">Scan with any UPI app</p>
                <p className="text-xs text-gray-500 mt-1">retailon@upi</p>
              </div>
              <button
                onClick={() => {
                  closeUpiModal();
                  onPaymentComplete();
                }}
                className="mt-6 w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Payment Completed
              </button>
            </div>
          </div>
        </div>
      )}

      {showCashConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Completed!</h3>
            <p className="text-gray-600">Cash payment of ₹{total} received</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentOptions;
