import React, {
  useState,
  useContext,
  useReducer,
  createContext,
  useEffect,
} from "react";
import customData from "../Components/Data/customData.json";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const initialState = {
    cart: [],
    saveLater: [],
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [data, setData] = useState(customData);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("state"));
    if (data) {
      dispatch({ action: "DATA_FROM_LOCAL", payload: data });
    }
  }, []);
  useEffect(() => {
   
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  function reducerFunc(state, { action, payload }) {
    switch (action) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, payload] };
      case "REMOVE_FROM_CART":
        const filterData = state.cart.filter((item) => item.id !== payload.id);
        return { ...state, cart: [...filterData] };
      case "INCREMENT_QTY":
        const incrementedData = state.cart.map((item) =>
          item.id === payload.id ? { ...item, count: item.count + 1 } : item
        );
        return { ...state, cart: [...incrementedData] };
      case "DECREMENT_QTY":
        let decrementedData;
        if (payload.count === 1) {
          decrementedData = state.cart.filter((item) => item.id !== payload.id);
        } else {
          decrementedData = state.cart.map((item) =>
            item.id === payload.id ? { ...item, count: item.count - 1 } : item
          );
        }
        return { ...state, cart: [...decrementedData] };
      case "SAVE_FOR_LATER":
        const filterCart = state.cart.filter((item) => item.id !== payload.id);
        return {
          ...state,
          cart: [...filterCart],
          saveLater: [...state.saveLater, payload],
        };
        break;
      case "REMOVE_FROM_SAVELATER":
        payload.count = 1;
        const filterSaveLater = state.saveLater.filter(
          (item) => item.id !== payload.id
        );
        return {
          ...state,
          cart: [...state.cart, payload],
          saveLater: [...filterSaveLater],
        };
        break;
      case "DATA_FROM_LOCAL":
        return { ...payload };
      default:
        return state;
        break;
    }
  }

  return (
    <ProductContext.Provider value={{ data, dispatch, state }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductProvider() {
  return useContext(ProductContext);
}
