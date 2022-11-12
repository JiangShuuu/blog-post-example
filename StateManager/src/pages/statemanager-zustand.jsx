import { useLogin, useAddToCart, useCartCoint, useLogout, useUser, useReduceToCart } from "../store/store-zustand"

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
  const addToCart = useAddToCart()
  const reduceToCart = useReduceToCart()

  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
      <button onClick={reduceToCart}>Add To Cart</button>
    </div>
  );
};

const CartCountSection = () => {
  const count = useCartCoint()
  
  return (
    <div>Cart Count: {count}</div>
  )
}

export default function ZustandPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  )
}