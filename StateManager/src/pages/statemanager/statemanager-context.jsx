import { useLogin, useReduceToCart, useAddToCart, useCartCount, useLogout, useUser, StoreContextProvider } from "./store-context"

const LoginSection = () => {
  const login = useLogin()
  const logout = useLogout()
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const UserSection = () => {
  const user = useUser()
  return (
    <div>User: {user}</div>
  )
}

const AddToCartSection = () => {
  const addToCart = useAddToCart()
  const reduceToCart = useReduceToCart()
  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
      <button onClick={reduceToCart}>Reduce To Cart</button>
    </div>
  );
};

const CartCountSection = () => {
  const count = useCartCount()
  return (
    <div>Cart Count: {count}</div>
  )
}

function ContextPage() {
  return (
    <div>
        <LoginSection />
        <UserSection />
        <AddToCartSection />
        <CartCountSection />
    </div>
  )
}

export default function ContextPageWrapper() {
  return (
    <StoreContextProvider>
      <ContextPage/>
    </StoreContextProvider>
  )
}
