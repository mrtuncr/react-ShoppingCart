import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState , useEffect } from 'react';

const ProductList = () => {

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products"
  const [product,setProduct]=useState([])
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(true)

  const getData=async()=>{
  try {
   
  const {data}= await axios.get(BASE_URL);
  setProduct(data)
} catch (error) {
  setError(true)
} finally{
  setLoading(false)
}

  }

useEffect(()=>{getData()},[])
  

 

 

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
       (
          <>
            <article id="product-panel" className="col-md-6">
              {[].map((product) => (
                <ProductCard key={product.id} />
              ))}
            </article>
           
          </>
        )
      </div>
    </div>
  );
};

export default ProductList;
