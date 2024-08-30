import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItem from "../components/ProductItem";

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]); // Correctly using useState

  useEffect(() => {
    if (products.length > 0) {
      let productsCpy = products.slice();
      productsCpy = productsCpy.filter((item) => category === item.category);
      productsCpy = productsCpy.filter((item) => subCategory === item.subCategory);
      setRelated(productsCpy.slice(0, 5)); // Set the filtered related products
    }
  }, [products, category, subCategory]); // Added category and subCategory as dependencies

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
