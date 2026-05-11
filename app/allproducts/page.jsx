"use client"
import { useRouter,useSearchParams } from 'next/navigation';
import Filters from '../component/Pricefilter'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import Loading from '../component/loading'
export default function Allproducts(){
 

    
    const searchParams = useSearchParams();

 


    // 1. Rename this local function
    // Emp
    const[producs,setProducts] = useState(null)

    
        return(

            <div>
                
                 im app product page

               <Filters/>
                
            

            </div>
        )
}