const reducer = (state, action) => {
  if (action.type === "fetch_product") {
    return {
      ...state,
      data: action.payload.products,
      total: action.payload.total
    };
  }
  if (action.type === "add_to_cart") {
    console.log(action.payload);
    const index = state.cart.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      const updatecard = state.cart.map((item, idx) =>
        idx === index ? { ...item, quantity: Number(item.quantity) + 1 } : item
      );
      return {
        ...state,
        cart: updatecard,
      };
    } else {
      const cardata = {
        id: action.payload.id,
        price: action.payload.price,
        title: action.payload.title,
        image: action.payload.thumbnail,
        quantity: 1,
      };
      return {
        ...state,
        cart: [...state.cart, cardata],
      };
    }
  }
  if (action.type === "decrement_quantity") {
    const index = state.cart.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      const updatecard = state.cart
        .map((item, idx) =>
          idx === index
            ? { ...item, quantity: Number(item.quantity) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cart: updatecard,
      };
    }
  }
  if (action.type === "increment_quantity") {
    const index = state.cart.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      const updatecard = state.cart.map((item, idx) =>
        idx === index ? { ...item, quantity: Number(item.quantity) + 1 } : item
      );
      return {
        ...state,
        cart: updatecard,
      };
    }
  }

  if (action.type === "Loading_true") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "Loading_false") {
    return {
      ...state,
      isLoading: false,
    };
  }

  if(action.type === 'remove_cart'){
    console.log(action.payload.id)
    const updatecart = state.cart.filter((item) => item.id !== action.payload.id)
    return {
        ...state,
        cart:updatecart,
        };
  
    }


    return{
        ...state,
    }
};

export default reducer;
