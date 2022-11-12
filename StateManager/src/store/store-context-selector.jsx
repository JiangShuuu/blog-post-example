import { useState, useCallback, useReducer } from "react"
import { createContext, useContextSelector } from "use-context-selector"

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
    login: useCallback(() => setUser('John'), []),
    logout: useCallback(() => setUser(''), []),
    addToCart: useCallback(() => dispatch({type: 'add'}), []),
    reduceToCart: useCallback(() => dispatch({type: 'reduce'}), [])
  }
}

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>
    { children }
  </StoreContext.Provider>
)

const useLogin = () => useContextSelector(StoreContext, s => s.login);
const useLogout = () => useContextSelector(StoreContext, s => s.logout);
const useAddToCart = () => useContextSelector(StoreContext, s => s.addToCart);
const useReduceToCart = () => useContextSelector(StoreContext, s => s.reduceToCart)
const useUser = () => useContextSelector(StoreContext, s => s.user);
const useCartCount = () => useContextSelector(StoreContext, s => s.cartCount);

export { useLogin, useLogout, useAddToCart, useUser, useCartCount, useReduceToCart }