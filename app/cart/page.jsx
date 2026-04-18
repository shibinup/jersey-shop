
"use client"
import CartProductCard from "../component/CartCard"
import { SummaryCard } from "../component/DesktopSummaryCard"
import { MobileCheckoutBar } from "../component/MobileCkeckoutBar"
import { useRouter } from 'next/navigation'
import {useAuth} from '../context/Authcontext'
import { useEffect, useState } from "react"
import { RemoveFromCart } from "../../services/cartServices"

export default function Cartpage(){


  const[products,setProducts] = useState([])
  const{user,loading} = useAuth()


  const onRemove =async(user,id)=>{
     await RemoveFromCart(user,id)
  }
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
       
      } catch (err) {
        //console.error("Error fetching cart:", err);
      }
    };

    if (!loading) {
      fetchCart();
    }

  }, [user, loading,onRemove])

  useEffect(() => {
  //console.log("products updated:", products);
}, [products]);


    const router = useRouter()
   
  {/* here adding total price */}
  const totalPrice = products.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);



   const onCheckout = ()=>{
    if(products.length>0){
      router.push("/OrderFilling")
    }
    else{
      alert("empty cart")
    }
   }

   return (
  <div>
    <div>
      <h1 className="font-bold text-3xl text-center pt-3">
        MY SHOPPING CART
      </h1>
    </div>

    {loading ? (
      <div>Loading...</div>
    ) : products.length === 0 ? (
      <div>Empty cart</div>
    ) : (
        <div className="lg:flex lg:flex-row lg:pl-15 ">
                      {/* here shows the carts */}
                         <div className="flex flex-col gap-3 flex-1  ">
                                {products.map((item)=>(
                                   
                                   <CartProductCard
                                    key ={item.id}
                                    user = {user}
                                    title ={item.title}
                                    imageUrl= {item.imageUrl}
                                    price={item.price}
                                    quantity={item.quantity}
                                    id ={item.id}
                                    onRemove ={onRemove}
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
    )}
  </div>
);
}