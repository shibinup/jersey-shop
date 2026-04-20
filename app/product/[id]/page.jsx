"use client"
import { Dummyproducts } from "../../dummydatas/dummyproducts";
import ProductDetail from "./ProductDetail";
import {useAuth} from '../../context/Authcontext'
import { useState ,useEffect} from "react";

export default function SingleProduct({ params }) {
  const {user,loading} = useAuth() 
  
  const[product,setProduct] = useState(null)
  
  useEffect(() => {
    async function fetchData() {
      const { id } = await params;
      
      // Changed: Just use the relative path starting with /
      const response = await fetch(`/api/product/${id}`);

      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [params]);
  
  if (loading) return <p>loading...</p>
  if (!product) return <p>product loading...</p>

  return (
    <div>
       <ProductDetail product={product}/>
    </div>
  );
} 
