import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from '../components/Title'
import ProductItem from "./ProductItem"

// Fixing latestCollection component
const latestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products]); // Add 'products' as a dependency

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In qui tempora quas, quaerat illum, hic, itaque magnam saepe repellat quod impedit! Saepe nam magnam, possimus sint fugiat rem illum repellendus.
                </p>
            </div>
            {/* Rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default latestCollection;
