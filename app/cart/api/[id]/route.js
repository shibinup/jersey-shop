import { NextResponse } from "next/server";
import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, { params }) {
    console.log("get api called ")
  try {
    console.log(" try blocjk in   get api called ")
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "No userId provided" });
    }

    const cartRef = doc(db, "carts", id);
    const cartSnap = await getDoc(cartRef);

    if (!cartSnap.exists()) {
      return NextResponse.json({ items: [] });
    }

    return NextResponse.json(cartSnap.data());

  } catch (error) {
    console.log("error in get api is calle dand error is ",error)
    return NextResponse.json({ error: "Server error" });
  }
}
