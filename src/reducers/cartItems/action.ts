import { Item } from "@/contexts/cartContext"

export enum ActionsType {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
}

export interface ActionData {
  type: ActionsType
  payload: {
    item?: Item
    productId?: string
  }
}

export function addItemToCart(item: Item): ActionData {
  return {
    type: ActionsType.ADD_PRODUCT_TO_CART,
    payload: {
      item: {
        ...item,
        id: item.id + ` ${Math.round(Math.random() * 1000)}`
      }
    }
  }
}

export function removeItemFromCart(productId: string): ActionData {
  return {
    type: ActionsType.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId
    }
  }
}