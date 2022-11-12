import { useState, createContext, useContext, useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};

const useStore = () => {
  const [ user, setUser ] = useState('')
  const [ cartCount, dispatch ] = useReducer(reducer, 0)

  return {
    user,
    cartCount,
    login: () => setUser('John'),
    logout: () => setUser(''),
    addToCart: () => dispatch({type: 'add'}),
    reduceToCart: () => dispatch({type: 'reduce'})
  }
}

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>
    { children }
  </StoreContext.Provider>
)

const useLogin = () => useContext(StoreContext).login;
const useLogout = () => useContext(StoreContext).logout;
const useAddToCart = () => useContext(StoreContext).addToCart;
const useReduceToCart = () => useContext(StoreContext).reduceToCart;
const useUser = () => useContext(StoreContext).user;
const useCartCount = () => useContext(StoreContext).cartCount;

export { useLogin, useLogout, useAddToCart, useUser, useCartCount, useReduceToCart }