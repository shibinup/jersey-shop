
// app/api/products/[id]/route.js
import { NextResponse } from "next/server";
import { Dummyproducts } from "../../../dummydatas/dummyproducts";
import { getDocs,collection, query,where,qu } from "firebase/firestore";
import { db } from "../../../../lib/firebase";


export async function GET(request,{ params }) {
  
  
  try {
    // 1. Await the dynamic parameters (Required in Next.js 15)
    const { id } = await params;
    

     //here taking referance of collection
    const collectionRef = collection(db, "products");
    //  Find the specific document
    const q = query (collectionRef, where("id", "==", Number(id)));
    //here accessing  document
    const documents = await getDocs(q)

      // Check if exactly one document exists
     if (!documents.empty) {
      
       const docData = documents.docs[0].data(); // Access the data
       
       return NextResponse.json(docData);
    } else {
    
    return  false;
  }
    
  } catch (error) {
    // Handle unexpected server errors
   
    return NextResponse.json(
      { message: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
