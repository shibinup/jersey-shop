
// app/api/products/[id]/route.js
import { NextResponse } from "next/server";
import { Dummyproducts } from "../../../dummydatas/dummyproducts";

export async function GET(request, { params }) {
  try {
    // 1. Await the dynamic parameters (Required in Next.js 15)
    const { id } = await params;

    // 2. Find the specific product
    const product = Dummyproducts.find((p) => p.id === id);

    // 3. Handle "Not Found" case
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" }, 
        { status: 404 }
      );
    }

    // 4. Return the data as JSON (Status 200 is default)
    return NextResponse.json(product);
    
  } catch (error) {
    // Handle unexpected server errors
    return NextResponse.json(
      { message: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
