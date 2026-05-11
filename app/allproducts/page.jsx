"use client"
import { useRouter,useSearchParams } from 'next/navigation';
import Filters from '../component/Pricefilter'
import { useEffect, useRef, useState  } from 'react'
import ProductCard from '../component/ProductCard'
import Loading from '../component/loading'
export default function Allproducts(){
 
const[price,setprice] = useState(null)
const [color,setColor] = useState(null)
    let filter = {}
    const searchParams = useSearchParams();

 
    const[products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

  const mount = useRef(false);
useEffect(() => {
  // Define the async function
        
        const  paramsprice  = searchParams.get("price")
        const paramscolor =  searchParams.get("color")
        setprice(paramsprice)
        setColor(paramscolor)
        filter.price = price
        filter.color = color
        
        setprice(paramsprice)
        setColor(paramscolor)
        console.log("all params are",{price,color})
  const fetchData = async () => {
    try {

        setIsLoading(true)
              // Construct query string for the API
      const query = new URLSearchParams({
        price: paramsprice || "",
        color: paramscolor || ""
      }).toString();
      const res = await fetch(`/allproducts/api/?${query}`);
      const data = await res.json();
     // console.log("res is ", data);
        setProducts(data)
        setIsLoading(false)
      console.log("products are",products)
    } catch (error) {
      console.error("Fetch failed", error);
      setIsLoading(false)
    }
  };
  fetchData()

  // Only run if it hasn't mounted yet
  
}, [searchParams]); // Empty array ensures this only triggers on mount

   useEffect(() => {
  console.log("Updated products are:", products);
}, [products]); 

    console.log("params in mai page is ",searchParams)


    
        return(

            <div>
                
                <div className='flex'>

                    <div>
                     im app product page
                    <Filters/>
                    </div>
                    {products.length>0?     <div className="flex gap-1 flex-wrap lg:pl-20">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.images}
            id={item.id}
          />
        ))}
      </div>:<Loading/> }
                    
                </div>
            

            </div>
        )
}