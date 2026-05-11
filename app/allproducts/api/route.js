import { db } from "../../../lib/firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {


  
  console.log("called");

  try {
    console.log("try called");

    const searchParams = request.nextUrl.searchParams;
  console.log("searchhhahahahah",searchParams)

    const price = searchParams.get("price");
    const color = searchParams.get("color");

    // 1. base collection
    let q = collection(db, "products")
    let conditions=[];

         if (price) {
      conditions.push(where("price", "<=", Number(price)));
    }

    if (color) {
      conditions.push(where("color", "==", color));
    }

      const finalQuery =conditions.length > 0 ? query(q, ...conditions) : q;




    // firestore data fetch
      // 4. fetch data
    const snapshot = await getDocs(finalQuery);


    // convert docs to array
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(products);

    // send response
    return NextResponse.json(products);

  } catch (error) {
    console.log("error called", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}