import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
export async function Fetching(){
    console.log("fetching function is called ")
    try {
        console.log("try from fetching function is called")
            const res = await getDocs(collection(db, "products"))
             res.forEach((doc) => {
    // doc.data() വഴി ഡാറ്റയും, doc.id വഴി ഐഡിയും ലഭിക്കും

             console.log(`${doc.id} => `, doc.data());
            //console.log("shibuu fetched is this",querySnapshot)
             })
            
            } 

    catch (error) {
        console.log("error from fetching function ",error)
        console.log(error.message)
    }
}
