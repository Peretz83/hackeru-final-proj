import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/single-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimiliarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimiliarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"product details - LeeCommerce"}>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product?._id}`}
            className="card-img-top"
            alt={product.name}
            style={{ objectFit: "cover" }}
            // height="250px"
            // width={"300px"}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <h5>Name: {product.name}</h5>
          <h5>Description: {product.description}</h5>
          <h5>Price: ${product.price}</h5>
          <h5>Category: {product?.category?.name}</h5>
          <button className="btn btn-secondary ms-1">Add to cart</button>
        </div>
      </div>
<hr/>
      <div className="row container">
        <h5>Similar products</h5>
        {relatedProducts.length < 1 && (<p className="text-center">No Similiar Products Found</p>)}
        <div className="d-flex flex-wrap p-4 ">
          {relatedProducts?.map((p) => (
            <div
              key={p._id}
              className="rounded p-3 d-flex flex-column m-2 h-100 justify-content-between"
              style={{ width: "18rem", border:"1px solid black"}}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">${p.price}</p>

               
              </div>
               <button className="btn btn-secondary ms-1">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
