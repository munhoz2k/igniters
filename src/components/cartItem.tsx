import Image from "next/image";
import { useContext } from "react";
import { formatPrice } from "@/lib/formatPrice";
import { CartContext } from "@/contexts/cartContext";

import { CartItemImageContainer, CartItemContainer, CarItemInfos } from "@/styles/components/cartItem";

interface CartItemProps {
  item: {
    id: string
    name: string
    imageUrl: string
    priceInCents: number
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem } = useContext(CartContext)

  return(
    <CartItemContainer>
      <CartItemImageContainer>
        <Image 
          src={item.imageUrl}
          alt="Imagem da camiseta"
          width={110}
          height={100}
        />
      </CartItemImageContainer>

      <CarItemInfos>
        <h3>{item.name}</h3>

        <h2>
          {formatPrice(item.priceInCents)}
        </h2>
        
        <button onClick={() => removeItem(item.id)}>
          Remover
        </button>
      </CarItemInfos>
    </CartItemContainer>
  )
}