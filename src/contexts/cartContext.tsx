import { addItemToCart, removeItemFromCart } from "@/reducers/cartItems/action"
import { cartItemsReducer } from "@/reducers/cartItems/reducer"
import { createContext, ReactNode, useEffect, useReducer } from "react"

interface CartContextProviderProps {
  children: ReactNode
}

export interface Item {
  id: string
  name: string
  imageUrl: string
  defaultPriceId: string
  priceInCents: number
}

interface CartContextType {
  addItem: (item: Item) => void
  removeItem: (productId: string) => void
  cartItemsState: Item[]
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItemsState, dispatch] = useReducer(
    cartItemsReducer,
    []
  )

  function addItem(item: Item) {
    dispatch(addItemToCart(item))
  }

  function removeItem(productId: string) {
    dispatch(removeItemFromCart(productId))
  }

  return (
    <CartContext.Provider value={{
      addItem,
      removeItem,
      cartItemsState
    }}>
      {children}
    </CartContext.Provider>
  )
}