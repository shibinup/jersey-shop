"use client";

import { useState ,useEffect ,useRef} from "react";
import { useRouter,useSearchParams } from 'next/navigation'
export default function Filters() {


  const [price, setPrice] = useState(400);
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ["Blue", "White", "Yellow", "Black"];
  const router=useRouter()
  const searchParams = useSearchParams();
  const mounted = useRef(false)
   useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
    return;
  }

  
  const params = new URLSearchParams(searchParams.toString());
  params.set("price", `${price}`)
  params.set("color",`${selectedColor}`);
  router.replace(`?${params.toString()}`);

}, [price, selectedColor]);



  return (
    <div className="w-full max-w-sm bg-white p-5 rounded-2xl shadow-md space-y-6">
      
      {/* Price Filter */}
      <div>
        <h2 className="text-xl font-bold mb-4">Filter by Price</h2>

        <input
          type="range"
          min="200"
          max="400"
          step="50"
        
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹200</span>
          <span>₹400</span>
        </div>

        <p className="mt-3 text-lg font-semibold">
          Selected Price: ₹{price}
        </p>
      </div>

      {/* Color Filter */}
      <div>
        <h2 className="text-xl font-bold mb-4">Filter by Color</h2>

        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                setSelectedColor(selectedColor === color ? null : color)
              
              }
              className={`px-4 py-2 rounded-xl border font-medium transition
                ${
                  selectedColor === color
                    ? "bg-black text-white border-black"
                    : "bg-gray-100 hover:bg-gray-200 border-transparent"
                }`}
            >
              {color}
            </button>
          ))}
        </div>

        <p className="mt-3 text-lg font-semibold">
          Selected Color: {selectedColor || "None"}
        </p>

        
       
      </div>
    </div>
  );
}