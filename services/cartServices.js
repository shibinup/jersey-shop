import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase"
import { getGuestId } from "./guestServices";



export const addToCart = async (product, user) => {
  
  try {
    
   
    const userId = await user?.uid|| getGuestId();

    const cartRef = doc(db, "carts", userId);

    // 🔍 1. Get existing cart
    const cartSnap = await getDoc(cartRef);

    //let cartItems = [];
    //here if cart already existing
    if (cartSnap.exists()) {
      //cartItems = cartSnap.data().items || [];
      let items = cartSnap.data().items || []
      //here finding index
     
      const existingIndex = items.findIndex(i => i.id === product.id)
      
      //hee if product already existing
   
      if (existingIndex > -1) {
  // Update the specific item in the array
       
      items[existingIndex].quantity += 1;
    } else {
  // Add new item
      items.push({ ...product, quantity: 1 });
  }


      await updateDoc(cartRef, { items })
    }else{
        await setDoc(cartRef, {
      items: [{...product,quantity: 1 }]
    });
    }

     alert("Added successfully  ✅!");
    return { success: true };

  } catch (error) {
     
    alert(" sorry failed to add ❌!")
    console.error(error);
    return { success: false, error: error.message };
  }
};

export const RemoveFromCart = async(user,productId) => { 
  console.log("shibuu remove from cart called ") 
  try { 
    console.log("try block from cart called ") 
    const userId = await user?.uid|| getGuestId(); 
    const cartRef = doc(db, "carts", userId); 

    const cartSnap = await getDoc(cartRef); 
    if (cartSnap.exists()) { 
      let items = cartSnap.data().items 
      const existingIndex = items.findIndex((i) => i.id === Number(productId)) 
      
      if (existingIndex === -1) { 
        console.log("Item not found in cart"); 
        return; 
      } 
      
      items.splice(existingIndex, 1); 

      await updateDoc(cartRef, { items: items }); 
      console.log("Item removed successfully"); 
    } 
  } catch (error) { 
    console.log("error from remove from cart called and error is ",error) 
  } 
}; // 

