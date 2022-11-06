import { useLogin, useAddToCart, useCartCoint, useLogout, useUser } from "./store-zustand"

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
    </div>
  );
};

const CartCountSection = () => {

  return (
    <div>Cart Count: {useCartCoint()}</div>
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