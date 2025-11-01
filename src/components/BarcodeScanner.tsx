import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, CameraOff } from 'lucide-react';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
}

const BarcodeScanner = ({ onScan }: BarcodeScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const qrCodeRegionId = 'qr-reader';

  const startScanner = async () => {
    try {
      setError('');
      const html5QrCode = new Html5Qrcode(qrCodeRegionId);
      scannerRef.current = html5QrCode;

      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          onScan(decodedText);
        },
        () => {
          // Ignore scan errors
        }
      );

      setIsScanning(true);
    } catch (err) {
      setError('Failed to start camera. Please check permissions.');
      console.error('Scanner error:', err);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current && isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
        setIsScanning(false);
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [isScanning]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Camera Scanner</h2>
        <button
          onClick={isScanning ? stopScanner : startScanner}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            isScanning
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isScanning ? (
            <>
              <CameraOff size={20} />
              Stop Camera
            </>
          ) : (
            <>
              <Camera size={20} />
              Start Camera
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div
        id={qrCodeRegionId}
        className="w-full border-2 border-gray-300 rounded-lg overflow-hidden"
        style={{ minHeight: '300px' }}
      />

      {!isScanning && !error && (
        <div className="text-center text-gray-500 mt-4">
          Click "Start Camera" to begin scanning barcodes
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
