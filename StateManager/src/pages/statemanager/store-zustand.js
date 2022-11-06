import create from "zustand"

const useStore = create(set => ({
  user: "",
  cartCount: 0,
  login: () => set(() => ({
    user: "Jack"
  })),
  logout: () => set(() => ({
    user: ""
  })),
  addToCart: () => set(state => ({
    cartCount: state.cartCount + 1
  }))
}))

const useLogin = () => useStore(state => state.login)
const useLogout = () => useStore(state => state.logout)
const useAddToCart = () => useStore(state => state.addToCart)
const useUser = () => useStore(state => state.user)
const useCartCoint = () => useStore(state => state.cartCount)

export { useLogin, useLogout, useAddToCart, useUser, useCartCoint }