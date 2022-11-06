import { useState, useCallback } from "react"
import { createContext, useContextSelector } from "use-context-selector"

const useStore = () => {
  const [ user, setUser ] = useState('')
  const [ cartCount, setCartCount ] = useState(0)

  return {
    user,
    cartCount,
    login: useCallback(() => setUser('John'), []),
    logout: useCallback(() => setUser(''), []),
    addToCart: useCallback(() => setCartCount(cartCount => cartCount + 1), [])
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
const useUser = () => useContextSelector(StoreContext, s => s.user);
const useCartCount = () => useContextSelector(StoreContext, s => s.cartCount);

export { useLogin, useLogout, useAddToCart, useUser, useCartCount }