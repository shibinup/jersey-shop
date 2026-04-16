
"use client"
import CartProductCard from "../component/CartCard"
import { SummaryCard } from "../component/DesktopSummaryCard"
import { MobileCheckoutBar } from "../component/MobileCkeckoutBar"
import { useRouter } from 'next/navigation'
import {useAuth} from '../context/Authcontext'
import { useEffect, useState } from "react"

export default function Cartpage(){


  const[product,setProducts] = useState([])
  const{user,loading} = useAuth()
 useEffect(() => {

    const fetchCart = async () => {
      let userId;

      if (user) {
        userId = user.uid;
      } else {
        userId = localStorage.getItem("guestId");
      }

      if (!userId) return;

      try {
        const res = await fetch(`/cart/api/${userId}`)
        const data = await res.json();
        
       setProducts(data.items|| []);
       console.log("data is ",data)
        console.log("products is ",product)

      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    if (!loading) {
      fetchCart();
    }

  }, [user, loading])

  useEffect(() => {
  console.log("products updated:", product);
}, [product]);


    const router = useRouter()
    const Cartproducts = [
      
  {
    id: 1,
    quantity:2,
    title: "Classic White T-Shirt",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    title: "Black Oversized Hoodie",
    quantity:5,
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    id: 3,
    quantity:3,
    title: "Blue Denim Jacket",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },]

  {/* here adding total price */}
  const totalPrice = Cartproducts.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

   const onCheckout = ()=>{
    if(Cartproducts.length>0){
      router.push("/OrderFilling")
    }
   }

    return(
        <div>
             {/* here heading my shopping cart */}
            <div>
                <h1 className="font-bold text-3xl text-center pt-3">MY SHOPPING CART</h1>
            </div>
             {/* below div is parent div to flex */}
            <div className="lg:flex lg:flex-row lg:pl-15 ">
              {/* here shows the carts */}
                 <div className="flex flex-col gap-3 flex-1  ">
                        {Cartproducts.map((item)=>(
                           
                           <CartProductCard
                            key ={item.id}
                            title ={item.title}
                            imageUrl= {item.imageUrl}
                            price={item.price}
                            id ={item.id}
                           />
                        ))}
                </div>
                {/* below div is second div for summary card */}
                {/*below div only see in desktop Desktop  */}
                <div className="hidden lg:block pl-0 w-100 pt-10 pr-120 ">
                       <SummaryCard subtotal={totalPrice} total={totalPrice} onCheckout={onCheckout}/>
                </div>
                        {/*below div only see in mobile */}
                         {/*below div is for procees checkout*/}
                <div className="md:hidden">
                        <MobileCheckoutBar total={totalPrice} onCheckout={onCheckout}/>
                </div>

            </div>
        </div>
    )
}