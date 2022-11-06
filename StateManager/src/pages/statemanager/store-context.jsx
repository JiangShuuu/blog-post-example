import { useState, createContext, useContext } from "react"

const useStore = () => {
  const [ user, setUser ] = useState('')
  const [ cartCount, setCartCount ] = useState(0)

  return {
    user,
    cartCount,
    login: () => setUser('John'),
    logout: () => setUser(''),
    addToCart: () => setCartCount(cartCount + 1)
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
const useUser = () => useContext(StoreContext).user;
const useCartCount = () => useContext(StoreContext).cartCount;

export { useLogin, useLogout, useAddToCart, useUser, useCartCount }