import { useLogin, useReduceToCart, useAddToCart, useCartCount, useLogout, useUser, StoreContextProvider } from "./store-context"

const LoginSection = () => {
  return (
    <div>
      <button onClick={useLogin()}>Login</button>
      <button onClick={useLogout()}>Logout</button>
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

  return (
    <div>
      <button onClick={useAddToCart()}>Add To Cart</button>
      <button onClick={useReduceToCart()}>Reduce To Cart</button>
    </div>
  );
};

const CartCountSection = () => {

  return (
    <div>Cart Count: {useCartCount()}</div>
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
