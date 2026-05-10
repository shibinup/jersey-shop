"use client"
import { useRouter,useSearchParams } from 'next/navigation';
import Filters from '../component/Pricefilter'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import Loading from '../component/loading'
export default function Allproducts(){
 

    
    const searchParams = useSearchParams();

  const price = searchParams.get('price');
  const color = searchParams.get('color')
  console.log({price,color})

  useEffect(() => {
    // 1. Rename this local function
    const fetchData = async () => {
        // 2. This now correctly calls the browser's global fetch
        const res = await fetch("/allproducts/api"); 
        const data = await res.json();
        console.log(data);
    };

    fetchData();
}, []); // Emp
    const[producs,setProducts] = useState(null)

    
        return(

            <div>
                
                 im app product page

                <Filters/>
                
            

            </div>
        )
}