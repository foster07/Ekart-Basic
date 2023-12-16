import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, fullData } from "../redux/slices/mySlice";
import Card from "../Components/Card";
import LoadingAnimation from "../Components/LoadingAnimation";

export default function HomePage() {

  const fullDataSet = useSelector((state) => state.myfirstSlice.fullDataSet);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(fullData(data));
  }

  useEffect(() => {
    setLoading(true);
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return ( 
    <div className="flex gap-8 flex-wrap justify-around px-8 w-full mb-6">
      {loading ? (
        <LoadingAnimation />
      ) : (
        fullDataSet.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))
      )}
    </div>
  );
}
