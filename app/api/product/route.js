import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
export async function Fetching(){
    console.log("fetching function is called ")
    try {
        console.log("try from fetching function is called")
            const resSnapshot = await getDocs(collection(db, "products"))
            return resSnapshot.docs.map(item=>({id:item.id,...item.data()}))
            } 

    catch (error) {
        console.log("error from fetching function ",error)
        console.log(error.message)
    }
}
