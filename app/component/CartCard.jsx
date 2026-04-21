import React from 'react';
import Image from "next/image";
import{ RemoveFromCart} from '../../services/cartServices'


export default function CartProductCard({ 
  id,
  title, 
  price, 
  quantity , 
  imageUrl,
  user,
  onRemove
   
}) {
  return (
    <div className="py-6  border-2 bg-gray-200 hover:bg-gray-400 border-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-start relative group lg:gap-30 lg:w-[70%] ">
        {/* here have first border*/}
      <div className="flex items-center sm:w-1/2 gap-4  lg:w-[25%] lg:pl-3 ">
        {/* here gave image inside below parent div*/}
      <div className="relative w-30 h-30 flex items-center justify-center rounded-md border border-gray-100 overflow-hidden shadow-sm">
    <Image 
      src={imageUrl[0]} 
      alt='image' 
      fill 
      sizes="120px" 
      className="object-cover"
      priority
    />
</div>
        {/* image parent div and image is finishing abovr*/}
        <div>
          <h3 className="font-bold text-gray-900 text-[15px] sm:text-base leading-snug hover:text-blue-600 cursor-pointer transition">
            {title}
          </h3>
          <div className="sm:hidden text-sm font-semibold text-gray-900 mt-1">
            ${price}
          </div>
        </div>
      </div>
      {/* here have second border*/}
      <div className="flex items-center justify-between sm:w-1/2 mt-4 lg:w-[40%] sm:mt-0  ">
        {/* Quantity */}
        <div className="flex items-center sm:mx-auto ">
          <div className="flex items-center border border-gray-300 rounded overflow-hidden h-9 bg-white shadow-sm hover:border-gray-400 transition w-24">
            <button className="px-3 hover:bg-gray-100 text-gray-600 transition flex-1 flex justify-center h-full items-center">
              <p>n</p>
            </button>
            <span className="px-2 font-bold text-sm text-gray-800">{quantity}</span>
            <button className="px-3 hover:bg-gray-100 text-gray-600 transition flex-1 flex justify-center h-full items-center">
             <p>p</p>
            </button>
          </div>
        </div>

        {/* Desktop Price */}
        <div className="hidden sm:block text-right font-medium text-gray-600 text-sm">
          ${price}
        </div>

        {/* Total & Remove */}
        <div className="flex items-center gap-4 sm:gap-6 text-right">
          <div className="font-bold text-gray-900 flex flex-col text-right">
            <span className="sm:hidden text-xs text-gray-500 font-normal uppercase">Total</span>
            ${(price * quantity)}
          </div>
            <div className='lg:pl-[100%]'>
           <button className="text-gray-400 hover:text-red-500 transition-colors p-1" aria-label="Remove item">
            <span className="hidden sm:inline text-xs mr-1 uppercase font-bold text-gray-500 hover:text-red-500">Remove</span>
            <p onClick={() => onRemove(user,id)}>X</p>
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}
