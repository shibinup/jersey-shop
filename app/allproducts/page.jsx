"use client"

import Filters from '../component/Pricefilter'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
export default function Allproducts(){

    const[producs,setProducts] = useState(null)




    
        return(

            <div>
                
                    im app product page

                <Filters/>
            </div>
        )
}