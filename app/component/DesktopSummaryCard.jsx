export function SummaryCard({ subtotal, total, onCheckout }) {
  return (
    <div className="hidden md:block bg-gray-200 hover:bg-gray-300 w-120 max-w-sm bg-white shadow-lg rounded-2xl p-6 h-fit">
      
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-3 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-lg text-black">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-800 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}