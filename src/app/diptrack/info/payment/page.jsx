// app/telemedis/dipstick/payment/page.jsx
"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Create a client component to handle the search params
function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");

  const [activeTab, setActiveTab] = useState("purchase");
  const [address, setAddress] = useState({
    type: "Rumah",
    detail: "Pondok Indah Jl. Tebet Raya No. 5, Jakarta Selatan",
    phone: "081272529976",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("regular");
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  // Package data
  const packageData = {
    id: packageId || "combo",
    name: "Paket Combo (6 Strip)",
    price: 95000,
    image: "/package.png",
  };

  // Payment summary
  const summary = {
    productPrice: packageData.price,
    discount: 15000,
    deliveryFee: 10000,
    total: packageData.price - 15000 + 10000,
  };

  const handlePay = () => {
    // Process payment and navigate to success page
    alert("Pembayaran berhasil diproses!");
    router.push("/diptrack/info/success");
  };

  return (
    <>
      {/* Product Details */}
      <div className="px-4 mb-2">
        <div className="flex items-center bg-white p-3 rounded-lg border border-gray-200">
          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3">
            <Image
              src={packageData.image}
              alt={packageData.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800">
              {packageData.name}
            </h3>
            <p className="text-xs text-gray-500">(Untuk penggunaan 6 bulan)</p>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="px-4 mb-2">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-800">
              Alamat Pengiriman
            </h3>
            <button className="text-red-500 text-xs font-medium">Ubah</button>
          </div>
          <p className="text-sm text-gray-600">{address.type}</p>
          <p className="text-xs text-gray-500">{address.detail}</p>
          <p className="text-xs text-gray-500">{address.phone}</p>
        </div>
      </div>

      {/* Delivery Method */}
      <div className="px-4 mb-2">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium mb-3 text-gray-800">
            Metode Pengiriman
          </h3>

          <div className="space-y-2">
            <label className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="radio"
                name="delivery"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
                checked={deliveryMethod === "regular"}
                onChange={() => setDeliveryMethod("regular")}
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Regular (2-3 hari)
                </p>
                <p className="text-xs text-gray-500">Rp 10.000</p>
              </div>
            </label>

            <label className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="radio"
                name="delivery"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
                checked={deliveryMethod === "express"}
                onChange={() => setDeliveryMethod("express")}
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Express (1 hari)
                </p>
                <p className="text-xs text-gray-500">Rp 25.000</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="px-4 mb-2">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium mb-3 text-gray-800">
            Metode Pembayaran
          </h3>

          <div className="space-y-2">
            <label className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="radio"
                name="payment"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
                checked={paymentMethod === "transfer"}
                onChange={() => setPaymentMethod("transfer")}
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">
                  Transfer Bank
                </p>
              </div>
            </label>

            <label className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="radio"
                name="payment"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
                checked={paymentMethod === "gopay"}
                onChange={() => setPaymentMethod("gopay")}
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Gopay</p>
              </div>
            </label>

            <label className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="radio"
                name="payment"
                className="h-4 w-4 text-red-500 focus:ring-red-500"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">
                  Cash on Delivery
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="px-4 mb-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium mb-3 text-gray-800">
            Ringkasan Pembayaran
          </h3>

          <div className="space-y-2 mb-3">
            <div className="flex justify-between">
              <p className="text-sm text-gray-800">Harga Produk</p>
              <p className="text-sm text-gray-800">
                Rp {summary.productPrice.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-sm text-red-500">Diskon</p>
              <p className="text-sm text-red-500">
                -Rp {summary.discount.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-sm text-gray-800">Biaya Pengiriman</p>
              <p className="text-sm text-gray-800">
                Rp {summary.deliveryFee.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-2 border-t">
            <p className="text-sm font-medium text-gray-800">Total</p>
            <p className="text-sm font-bold text-gray-800">
              Rp {summary.total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="px-4 pb-8">
        <button
          onClick={handlePay}
          className="w-full bg-red-500 text-white py-3 rounded-md font-medium"
        >
          Bayar Sekarang
        </button>
      </div>
    </>
  );
}

// Main component with suspense boundary
export default function TelemedisDipstickPayment() {
  const [activeTab, setActiveTab] = useState("purchase");
  const router = useRouter();

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center -mt-4">
            <Link
              href="/diptrack/info/purchase"
              className="flex items-center text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="flex-1 text-center ml-6">
              <h1 className="text-sm font-bold text-gray-900">
                Detail Pembelian
              </h1>
              <p className="text-xs text-gray-500">Dipstick Kit</p>
            </div>
            <div className="w-14">
              <Image
                src="/logo-vegetables.png"
                alt="Gigin dan Jajal"
                width={60}
                height={60}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 -mt-2">
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "information"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
            >
              Informasi
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "purchase"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
            >
              Pembelian
            </button>
          </div>
        </div>

        {/* Wrapped in Suspense */}
        <Suspense
          fallback={
            <div className="p-4 text-center">Loading payment details...</div>
          }
        >
          <PaymentContent />
        </Suspense>
      </div>
    </main>
  );
}
