"use client"
import { Dummyproducts } from "../../dummydatas/dummyproducts";
import ProductDetail from "./ProductDetail";
import {useAuth} from '../../context/Authcontext'
import { useState ,useEffect} from "react";
export default  function SingleProduct({ params }) {
  const {user,loading} = useAuth() 
  
  const[product,setProduct] = useState(null)
  
  useEffect(() => {
    async function fetchData() {
      const { id } = await params; // params is a promise in newer Next.js versions
      const response = await fetch(`http://localhost:3000/api/product/${id}`);
      const data = await response.json();
      setProduct(data)
    ;
    }
    fetchData();
  }, [params]);
  
    if(loading) return <p>loading...</p>
    if (!product) return <p>product loading...</p>

    return <div>
    <ProductDetail product={product}/>
    </div>;
}