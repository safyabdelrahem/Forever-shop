import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        console.log("Products:", products); // Verify products data
        const bestProduct = products.filter((item) => item.bestseller);
        console.log("Best Sellers:", bestProduct); // Verify filtered data
        setBestSeller(bestProduct.slice(0, 4));
    }, [products]);
    

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium corporis quod est earum nam non unde optio laborum, dolorem in soluta quos! Autem beatae quis corporis! Ullam, fuga incidunt?
                </p>
            </div>
            {/* Render best sellers if needed */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
                {bestSeller.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                   
                ))}
            </div>
        </div>
    );
}

export default BestSeller;
