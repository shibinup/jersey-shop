import Image from "next/image";
import Navbar from './component/Navbar'
import main_image from '../public/main_image.png'
import  ProductCard from './component/ProductCard'
//import {Fetching} from '../app/api/product/route'




export default async function Home() {
 console.log("Firebase API Key is:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/product`, { 
  cache: "no-store" 
});

const products = await res.json();
  return (


   <div>
       
      {/* div for the image  */}
      <div className="">
         <Image  className="h-70 lg:h-full w-full" src={main_image} alt="desc" />


      </div>


         {/* div to headinf top sellers*/}
      <div>
            <h1 className="text-2xl font-extrabold text-black text-center" >TOP SELLERS</h1>
               
      </div>

        {/* here start to show producs */}
        <div className="flex gap-3 flex-wrap lg:pl-20">
          {products.map((item) => (
            
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.images}
          id={item.id}
        />
      ))}

        </div>


   </div>
  );
}
