import { signInWithGoogle, logoutUser } from "@/lib/auth";
import { getDoc,collection, doc, setDoc ,updateDoc} from "firebase/firestore";
import { db } from "../../lib/firebase";
export  async function SignupManagement(){
    console.log("management called ")
        const user  = await signInWithGoogle()
        console.log("user is ",user)
        const id = user.user.uid
         console.log("shibuuuu here user id is ",id)
         MergeCart(id)
}

export async function MergeCart(id){
    try {
        
     console.log("merge cart called ")
    const userUid = id
    const guestid = localStorage.getItem("guestId")
    if (!guestid) return;
     // if hav eguest id 
    console.log("guets is if cndition is called ")
    const guestcartref= doc(db, "carts",guestid)
     
    const guestcartsnap = await getDoc(guestcartref)

    if (!guestcartsnap.exists()) return
     
    // if get snap
    console.log("guest cart snap existed is called ")
    const guestitemsArray = guestcartsnap.data().items 
     
     console.log("lenght is ",guestitemsArray.length)
    if(guestitemsArray.length<1) return; // 
    console.log("lenght is ",guestitemsArray.length)

    //next check for have user have cart 
   const userCartRef = doc(db, "carts",String(userUid));
   const usercartsnap = await getDoc(userCartRef)
   if(!usercartsnap.exists()){
    console.log("reached 39")
        await setDoc(userCartRef,{items:[]}) // creating a document
   }
   //taking users first items 
    console.log("reached 43")
    const secondsnapforuser = await getDoc(userCartRef)
   const usercartItems = await secondsnapforuser.data().items || [];
     let finalItems = [...usercartItems]
    console.log("reached 47")
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
        console.log("shibuu error is ",error)
    }
}

