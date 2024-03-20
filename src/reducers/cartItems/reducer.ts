import { Item } from "@/contexts/cartContext"
import { ActionData, ActionsType } from "./action"

export function cartItemsReducer(cartItemsState: Item[], action: ActionData) {
  switch (action.type) {
    case ActionsType.ADD_PRODUCT_TO_CART:
      return [...cartItemsState, action.payload.item]
  
    case ActionsType.REMOVE_PRODUCT_FROM_CART:
      const newCartState = cartItemsState.filter(item => item.id !== action.payload.productId)
      return newCartState
    
    default:
      return cartItemsState
  }
}