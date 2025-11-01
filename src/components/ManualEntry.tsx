import { useState } from 'react';
import { Keyboard } from 'lucide-react';

interface ManualEntryProps {
  onSubmit: (barcode: string) => void;
}

const ManualEntry = ({ onSubmit }: ManualEntryProps) => {
  const [barcode, setBarcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcode.trim()) {
      onSubmit(barcode.trim());
      setBarcode('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Keyboard size={24} />
        Manual Barcode Entry
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Enter barcode number..."
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ManualEntry;
