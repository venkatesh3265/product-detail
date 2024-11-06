import React, { useContext } from "react";
import { AppStore } from "../context/AppContext";
import EmptyCart from "../assets/EmptyCart";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Cart = () => {
  const { state,removeCart } = useContext(AppStore);
  const cart = state?.cart;
  if (cart && cart.length == 0) {
    return (
      <div className="bg-white m-2 p-2 shadow-lg relative  w-[300px] h-[300px] flex flex-col ">
        <h1 className="text-lg font-bold text-orange-700 m-2"> Your Cart(0)</h1>
        <div className=" flex justify-center items-center flex-1 flex-col">
        <EmptyCart/>
        <p className=" m-2"> Your Added items will appear here</p>
        </div>
     
      </div>
    );
  }
  return <div className="bg-white m-2 p-2 shadow-lg relative">
    {
      cart&& cart.map((item, index) => {
            return (
              <div className="grid grid-cols-12">
                <div className="   col-span-10"> 
                    <h1 className="font-bold text-sm p-0 m-0"> {item.title}</h1>
                    <p className="text-sm text-gray-600 p-1 font-bold"> <span className="text-orange-600 pr-1"> {item.quantity}X</span>  ${item.price} ${Number(item.price) * Number(item.quantity)}</p>
                </div>
                <div className="text-lg  col-span-2 flex items-center justify-center"> 
                <AiOutlineCloseCircle className=" cursor-pointer" onClick={()=> removeCart(item.id)} />
                </div>
                </div>
            )
        })
    }
  </div>;
};

export default Cart;
