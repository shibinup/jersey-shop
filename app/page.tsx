import Image from "next/image";
import Navbar from './component/Navbar'
import main_image from '../public/main_image.png'
import  ProductCard from './component/ProductCard'
import {Fetching} from '../app/api/product/route'




export default async function Home() {

const pro = await Fetching()
console.log("shibu pro is ",pro)
 const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    title: "Black Oversized Hoodie",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    id: 3,
    title: "Blue Denim Jacket",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 4,
    title: "Casual Sneakers",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 5,
    title: "Minimalist Watch",
    price: 99.99,
    imageUrl: "", // test placeholder
  }
  
];


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
          imageUrl={item.imageUrl}
          id={item.id}
        />
      ))}

        </div>


   </div>
  );
}
