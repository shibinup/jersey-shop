import { db } from "../../../lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("called");

  try {
    console.log("try called");

    // firestore data fetch
    const querySnapshot = await getDocs(
      collection(db, "products")
    );

    // convert docs to array
    const products = querySnapshot.docs.map((doc) => ({
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