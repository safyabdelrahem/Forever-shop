import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js"; // Adjust path and import based on export
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => { // Use props instead of prop
    const currency = `$`;
    const delivery_fee = 10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowsearch]=useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate=useNavigate()

    const addToCart = async(itemId,size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
     let cartData = structuredClone(cartItems);
     if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size]+=1;
        }else{
            cartData[itemId][size]=1
        }
     }else{
        cartData[itemId]={};
        cartData[itemId][size]=1
     }
     setCartItems(cartData)
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    useEffect(()=>{
console.log(cartItems);

    },[cartItems])

const updateQuantity=async(itemId,size,quantity)=>{
let cartData= structuredClone(cartItems);
cartData[itemId][size]=quantity;
setCartItems(cartData)
}

const getCartAmount=()=>{
let totalAmount=0;
for(const items in cartItems){
    let itemInfo=products.find((product)=>product._id===items);
    for(const item in cartItems[items]){
     try {
        if(cartItems[items][item]>0){
            totalAmount+=itemInfo.price*cartItems[items][item];
        }
     } catch (error) {
        
     }
    }
}
return totalAmount;
}


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,showSearch,setShowsearch,addToCart,cartItems,getCartCount,updateQuantity,getCartAmount,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Use props.children instead of prop.children */}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;