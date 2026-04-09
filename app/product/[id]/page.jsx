import { Dummyproducts } from "../../dummydatas/dummyproducts";
export default async function SingleProduct({ params }) {
  const {id} = await params
  const response = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-store", //important for fresh data
  })
  const product = await response.json()

  return <div>
    hayy {id}
    
   
  </div>;
}