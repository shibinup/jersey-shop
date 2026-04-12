"use client";

import { useState, useEffect } from "react";
import { useAuth } from '../context/Authcontext';

export default function CheckoutForm() {
  const { user, loading } = useAuth();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  // Update form when user data becomes available
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", form);
  };

  if (loading) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Checkout Details</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name - Read Only if user exists */}
            <div>
              <label className="block text-sm mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                readOnly={!!user?.uid}
                className={`w-full border rounded-lg p-3 focus:outline-none ${
                  user?.uid ? "bg-gray-100 cursor-not-allowed" : "focus:ring-2 focus:ring-black"
                }`}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email - Read Only if user exists */}
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                readOnly={!!user?.uid}
                className={`w-full border rounded-lg p-3 focus:outline-none ${
                  user?.uid ? "bg-gray-100 cursor-not-allowed" : "focus:ring-2 focus:ring-black"
                }`}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm mb-1 font-medium">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black"
                placeholder="Enter city"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black"
              rows="3"
              placeholder="Enter full address"
              required
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm mb-1 font-medium">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black"
              placeholder="Enter pincode"
              required
            />
          </div>

          {/* Payment */}
          <div>
            <label className="block text-sm mb-2 font-medium">Payment Method</label>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={form.payment === "online"}
                  onChange={handleChange}
                  className="accent-black"
                />
                Online Payment
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}