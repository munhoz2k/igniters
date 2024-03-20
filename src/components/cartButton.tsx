import { useContext } from "react";

import { CartContext } from "@/contexts/cartContext";
import { CartButtonAmount, CartButtonContainer } from "@/styles/components/cartButton";

import { ShoppingBag } from "phosphor-react";

interface CartButtonProps {
  openCloseFunction: () => void
}

export default function CartButton({ openCloseFunction }: CartButtonProps) {
  const { cartItemsState } = useContext(CartContext)

  return (
    <CartButtonContainer onClick={openCloseFunction}>
      <ShoppingBag size={32} color="white" />
      
      {cartItemsState.length > 0 ? (
        <CartButtonAmount>{cartItemsState.length}</CartButtonAmount>
      ) : ''}
    </CartButtonContainer>
  )
}