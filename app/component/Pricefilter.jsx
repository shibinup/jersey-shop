"use client";

import { useState ,useEffect ,useRef} from "react";
import { useRouter,useSearchParams,usePathname } from 'next/navigation'
export default function Filters() {


  const [price, setPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const colors = ["Blue", "White", "Yellow", "Black"];
  const router=useRouter()
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const mounted = useRef(false)


  const handlechange = async (key,value)=>{
  //taking url
   const currentParams =   new URLSearchParams(searchParams.toString())
   console.log("current param to tring  is ",currentParams)
   if(value){
      currentParams.set(key,value)
      currentParams.toString()
   }else{
    currentParams.delete(key)
   }
   // had changed by by user 
   let newurl;
   if(currentParams.size>0){
      newurl = `${pathname}?${currentParams.toString()}`
   }else{
    // when filter to zero
    newurl= `${pathname}`
   }
   router.push(newurl)
}
  useEffect(() => {
     const paramprice = searchParams.get("price")
     setPrice(paramprice)
       const paramcolor = searchParams.get("color")
      setSelectedColor(paramcolor)
  
}, [searchParams]);
 
 // whenever any hange in url(price or color filter) do below function 




  return (
    <div className="w-full max-w-sm bg-white p-5 rounded-2xl shadow-md space-y-6">
      
      {/* Price Filter */}
      <div>
        <h2 className="text-xl font-bold mb-4">Filter by Price</h2>

        <input 
  type="number" // Changed from "range" to "number"
  value={price||""} 
  onChange={(e) => handlechange("price", e.target.value)} // Fixed extra parenthesis: (("price"... -> ("price"...
  className="w-full border p-2" // Added styling for better visibility
  placeholder="Enter price"
/>


        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹100</span>
          <span>₹500</span>
        </div>

        <p className="mt-3 text-lg font-semibold">
          Selected Price: ₹{price||"0"}
        </p>
      </div>

      {/* Color Filter */}
      <div>
        <h2 className="text-xl font-bold mb-4">Filter by Color</h2>

        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
                onClick={() => {
                              const newValue = selectedColor === color ? "" : color;
                                handlechange("color", newValue);
                            }}
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