import "./Home.css";
import { React, useEffect, useState } from "react";

export const Home = () => {

   const [products, setProducts] = useState([]); 
   const [loading, setLoading] = useState(true); 

   useEffect(() => {
    getData()
   }, [loading]);


   function getData() {
    fetch('https://dummyjson.com/products').then(response => response.json()).then((data) => {
        console.log("data", data.products)
        setProducts(data.products);
        setLoading(false)
    }).catch((err) => {
        console.log('err', err)
    })
   }

    return (
        <div id="data" className="align-center">
            { !loading ? 
                    products?.map((product, idx) => {
                        return(
                        <div className="width-33" key = {product.title + idx}>
                            <p className="title-colorm title-size">{product.title}</p>
                            <div>
                            <span className="product-description">{product.description}</span>
                            </div>
                            <div className="image-block">
                              <img className="img-center" src={product.images[0]} ></img>
                            </div>
                        </div>
                        )
                    })
                : <span>loading...</span> 
            }
        </div>
    )
}