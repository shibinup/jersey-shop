import Image from "next/image";
import Navbar from './component/Navbar';
import main_image from '../public/main_image.png';
import ProductCard from './component/ProductCard';
import { adminDb} from '@/lib/firebaseAdmin'

// 1. Import Firebase Firestore functions and your db instance
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// 2. Force dynamic rendering (equivalent to the previous { cache: "no-store" } fetch setting)
export const dynamic = 'force-dynamic';

export default async function Home() {
  
  // 3. Fetch data directly from Firebase instead of making an HTTP fetch to your API
  let products = [];
  try {
    const resSnapshot = await await adminDb.collection("products").get()
    products = resSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching products from Firebase:", error);
  }

  return (
   <div>
      {/* div for the image  */}
      <div className="">
         <Image className="h-70 lg:h-full w-full" src={main_image} alt="desc" priority/>
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
