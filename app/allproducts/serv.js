import { db } from "@/lib/firebase";
import { collection, getDocs ,doc} from "firebase/firestore";

 
 const FetchProduct =async()=>{

    const snapshot = await getDocs(collection(db, "products"));
    if (snapshot.exists()) {
         const data = snapshot.data(); // This is your actual object { title: "Hello", ... }
         console.log(docSnap.id);     // This is the "ID" of that record
}

 }