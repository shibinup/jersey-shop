export function MobileCheckoutBar({ total, onCheckout }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  shadow-md p-4 md:hidden z-50">
      
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-lg font-semibold">₹{total}</p>
        </div>

        <button
          onClick={onCheckout}
          className="bg-blue-600 text-white px-5 py-2 w-1/2 rounded-lg hover:bg-blue-700 transition"
        >
          Proceed To Checkout
        </button>

      </div>
    </div>
  );
}