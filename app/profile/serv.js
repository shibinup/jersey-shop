import { signInWithGoogle, logoutUser } from "@/lib/auth";
import { getDoc,collection, doc, setDoc ,updateDoc} from "firebase/firestore";
import { db } from "../../lib/firebase";
export  async function SignupManagement(){
    
        const user  = await signInWithGoogle()
        let id
        if(user.success){
          console.log("user is ",user)
           id = user.user.uid
        } else{
          return
        }

         
         MergeCart(id)
}

export async function MergeCart(id){
    try {
        
     
    const userUid = id
    const guestid = localStorage.getItem("guestId")
    if (!guestid) return;
     // if hav eguest id 
    
    const guestcartref= doc(db, "carts",guestid)
     
    const guestcartsnap = await getDoc(guestcartref)

    if (!guestcartsnap.exists()) return
     
    // if get snap
    
    const guestitemsArray = guestcartsnap.data().items 
     
     
    if(guestitemsArray.length<1) return; // 
    

    //next check for have user have cart 
   const userCartRef = doc(db, "carts",String(userUid));
   const usercartsnap = await getDoc(userCartRef)
   if(!usercartsnap.exists()){
    
        await setDoc(userCartRef,{items:[]}) // creating a document
   }
   //taking users first items 
   
    const secondsnapforuser = await getDoc(userCartRef)
   const usercartItems = await secondsnapforuser.data().items || [];
     let finalItems = [...usercartItems]
    
    guestitemsArray.forEach((guestItem) => {
        const index = finalItems.findIndex(
          (item) => item.id === guestItem.id
        );

        if (index !== -1) {
          // item exists → increase quantity
          finalItems[index].quantity += guestItem.quantity;
        } else {
          // new item → push
          finalItems.push(guestItem);
        }
      });   

      // update user cart
      await setDoc(userCartRef, {
        items: finalItems,
      });
      localStorage.removeItem("guestId")
    } catch (error) {
        //console.log("shibuu error is ",error)
    }
}

