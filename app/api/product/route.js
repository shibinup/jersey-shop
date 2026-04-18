import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { NextResponse } from "next/server";
export async function GET(){
    
    try {
        
            const resSnapshot = await getDocs(collection(db, "products"))
           // return resSnapshot.docs.map(item=>({id:item.id,...item.data()}))
             const products = resSnapshot.docs.map(doc => ({
               id: doc.id,
             ...doc.data()
             }));
       
              return NextResponse.json(products)
            } 

    catch (error) {
        
       // console.log(error.message)
    }
}
