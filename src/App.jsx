import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppStore, Limit } from "./context/AppContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ShimmerUi from "./components/ShimmerUi";

function App() {
  const { state, fetchProduct } = useContext(AppStore);
  const [currentpageNumber , setCurrentPageNumber] = useState(0);
  useEffect(() => {
    fetchProduct(currentpageNumber);
  }, [currentpageNumber]);
  let productData = state?.data;
  let isLoading = state?.isLoading;
  let totalNumber = Math.ceil(state?.total / Limit);
  console.log(totalNumber)
  console.log(state)
  return (
    <>
    <div className="bg-pink-100 h-max p-2 grid grid-cols-12">
      <div className=" flex flex-wrap flex-1 col-span-9 items-center justify-center">
        { isLoading && <ShimmerUi/>

        }
         { !isLoading && productData && productData.length>0 ?
          productData.map((items) => <Products product={items} />)  :
          
          "" } 
          <div className="w-full flex items-center justify-center">   
            <div className=''>     {
            [...Array(totalNumber).keys()].map(pN =>(
              <span  className={`p-1 m-1 cursor-pointer ${currentpageNumber === pN ?'text-bold underline':'' }`}  onClick={()=> setCurrentPageNumber(pN)} key={pN}>  {pN+1}</span>
            ))
          }
          </div> 
          </div> 

      </div>
      <div className="flex flex-col col-span-3 ">
        <Cart/>
        
      </div>
    </div>
    
    
    </>
    
  );
}

export default App;
