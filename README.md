# Retail Barcode Billing System

A fast, modern, and user-friendly **Retail Barcode Billing System** built using **React + TypeScript + Tailwind CSS**. It allows:

* ✅ Barcode scanning (camera-based)
* ✅ Manual barcode entry
* ✅ Automatic product detection
* ✅ Shopping cart management
* ✅ UPI & Cash payment options
* ✅ Auto-generated UPI QR Code
* ✅ Clean and responsive UI

You can test the deployed live version here:
👉 **[https://retail-barcode-entry.vercel.app/](https://retail-barcode-entry.vercel.app/)**

---

## 🚀 Features

### ✅ Barcode Scanning

* Uses device camera to scan barcodes
* Automatically detects product & adds to cart

### ✅ Manual Entry

* Enter barcode manually
* Useful for cases where scanner fails

### ✅ Smart Cart System

* Increase quantity automatically if already added
* Remove any item
* Clear entire cart
* Automatic grand total calculation

### ✅ Payment Options

* UPI Payment (QR code auto-generated)
* Cash Payment confirmation popup

### ✅ Notification System

* Animated pop-up alerts for feedback

---

## 🛠️ Tech Stack

| Technology             | Purpose                          |
| ---------------------- | -------------------------------- |
| **React + TypeScript** | Main frontend framework          |
| **Tailwind CSS**       | Styling and UI                   |
| **Vite**               | Fast bundler and dev environment |
| **Lucide Icons**       | Clean UI icons                   |
| **qrcode.react**       | QR Code generator                |
| **Vercel**             | Hosting                          |

---

## 📁 Project Structure

```
RETAIL_BARCODE_ENTRY-MAIN
│── src
│   ├── components
│   │   ├── BarcodeScanner.tsx
│   │   ├── Cart.tsx
│   │   ├── ManualEntry.tsx
│   │   └── PaymentOptions.tsx
│   ├── data
│   │   └── products.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── types.ts
│   └── vite-env.d.ts
│── package.json
│── tsconfig.json
│── tailwind.config.js
│── postcss.config.js
│── index.html
│── README.md
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/RETAIL_BARCODE_ENTRY.git
cd RETAIL_BARCODE_ENTRY
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## 🧪 Test the Live App

You can test the deployed version here:
👉 **[https://retail-barcode-entry.vercel.app/](https://retail-barcode-entry.vercel.app/)**

---

## 🔧 Customization

### ✅ Change UPI ID

Edit inside `PaymentOptions.tsx`:

```ts
const upiLink = `upi://pay?pa=YOUR_UPI_ID&pn=YOUR_NAME&am=${total}&cu=INR`;
```

Example:

```ts
pa=9438386009@axl
pn=Ujjwal
```

---

## ✅ Future Enhancements

* ✅ Add product database using API
* ✅ Add admin dashboard
* ✅ Add receipt/ invoice generation
* ✅ Add data export to Excel

---

## 📝 License

This project is open-source and free to use.

---

## 👨‍💻 Developed By

**Ujjwal Mandal**
GitHub: [https://github.com/Ujjwal1401](https://github.com/Ujjwal1401)

---

### ⭐ If you like this project, give it a star on GitHub!
