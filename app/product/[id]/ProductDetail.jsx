// app/product/[id]/ProductDetail.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetail({ product }) {
  //console.log("shibuu products is ",product)
 
     const router = useRouter()
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
 <div >
    <div className="hidden lg:flex lg:justify-end lg:pr-[20%] "><button onClick={() => router.back()} className="  hover:text-red-500">X</button></div>
       <div className="max-w-7xl mx-auto p-4 md:grid md:grid-cols-2 gap-8">
       {/* here go back int on mobile not in md+ */} 
    <div className="md:hidden relative flex justify-end"><button  onClick={() => router.back()} className="hover:text-red-500">X</button></div>
      {/* LEFT - Images */}
      <div className="">
        <img src={selectedImage} className="w-[70%] rounded-xl" />

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
          <p className="font-medium">Available Size</p>
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

      </div>

    
    </div>
 </div>
  );
}