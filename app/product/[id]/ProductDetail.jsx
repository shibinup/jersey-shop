// app/product/[id]/ProductDetail.jsx
"use client";

import { useState } from "react";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:grid md:grid-cols-2 gap-8">
            
      {/* LEFT - Images */}
      <div>
        <img src={selectedImage} className="w-full rounded-xl" />

        <div className="flex gap-2 mt-3">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setSelectedImage(img)}
              className="w-16 h-16 rounded-md border cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="mt-5 md:mt-0">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl mt-2">${product.price}</p>

        {/* Size */}
        <div className="mt-4">
          <p className="font-medium">Size</p>
          <div className="flex gap-2 mt-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="border px-3"
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="border px-3"
          >
            +
          </button>
        </div>

        
      </div>

    
    </div>
  );
}