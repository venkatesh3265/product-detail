import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppStore } from "../context/AppContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const Products = ({ product }) => {
    const {  addtocart,state,decrementQuantity,IncrementQuantity } = useContext(AppStore);
    const index = state.cart.findIndex( item => item.id === product.id);
    console.log()
    console.log(index)
  return (
    <div className="bg-white m-2 p-2 shadow-lg relative w-[250px]">
      <img src={product.thumbnail}  loading="lazy" className=" rounded" />
      <div className="p-2">
        <p className="font-bold"> {product.title}</p>
        <p className="text-orange-500 font-bold">${product.price}</p>
      </div>
      {
        index !== -1 ? (
            <button className="bg-pink-100 p-2 border border-red-400  w-[50%] rounded-full flex justify-between items-center absolute z-10 top-[60%] right-[28%]"  >
                
                <AiOutlinePlusCircle  onClick={()=>{IncrementQuantity({id:product.id})}} /> <span>{state.cart[index].quantity}</span>   <AiOutlineMinusCircle className=" cursor-pointer" onClick={()=>{decrementQuantity({id:product.id})}} />
              </button>
        ): (<button className="bg-pink-100 p-2 border border-red-400 rounded-full flex justify-between items-center absolute z-10 top-[60%] right-[28%]" onClick={()=>{
            addtocart(product)
          }} >
            
            <AiOutlineShoppingCart /> <span>ADD TO CART</span>
          </button>)
         
      }
      
    </div>
  );
};

export default Products;
