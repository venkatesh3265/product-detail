import { createContext, useReducer } from "react";
import React from 'react'
import reducer from "./reducer";
export const AppStore = createContext();
export const Limit = 15;
const intialstate = {
    isLoading: false,
    data : [],
    cart: [],
    total: 0,
}
export const AppContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialstate)
      console.log(state)
    const fetchProduct = async(currentPage)=>{
      try{
       dispatch({type: 'Loading_true' })
      let data  = await fetch(`https://dummyjson.com/products?limit=${Limit}&skip=${Limit* currentPage}`);
      let response = await data.json();
      
      dispatch({type: 'fetch_product', payload: response  })
      dispatch({type: 'Loading_false' })
      }catch(error){
          console.log(error)
      }
      
  
    }

    const addtocart = async(product) =>{
      try{

        dispatch({type: 'add_to_cart', payload: product})

      }catch(error){

      }
    }
    const decrementQuantity = async(id) =>{
      try{
        dispatch({type: 'decrement_quantity', payload: id})
        }catch(error){
          console.log(error)
          }
    }

    const IncrementQuantity = async(id) =>{
      try{
        dispatch({type: 'increment_quantity', payload: id})
        }catch(error){
          console.log(error)
          }
    }

    const removeCart = async(id)=>{
      try{
        dispatch({type: 'remove_cart', payload:{ id}});
        }catch(error){
          console.log(error);
          }
    }
 
  return (
    <AppStore.Provider value={{state,fetchProduct,addtocart,decrementQuantity,IncrementQuantity,removeCart}}> {children} </AppStore.Provider>
  )
}
