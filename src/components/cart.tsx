import Image from "next/image";
import { HTMLAttributes, useContext, useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { CheckoutBody, CheckoutRes } from "@/pages/api/checkout";
import { formatPrice } from "@/lib/formatPrice";
import { CartContext } from "@/contexts/cartContext";

import CartItem from "./cartItem";
import {
  CartContainer,
  CartProductsList,
  CartProductsContainer,
  CartCheckoutContainer
} from "@/styles/components/cart";

import x from '@/assets/x-icon.svg'

interface CartProps extends HTMLAttributes<HTMLDivElement> {
  openCloseFunction: () => void
}

export default function Cart({ openCloseFunction, ...props}: CartProps) {
  const { cartItemsState } = useContext(CartContext)
  const productListRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState('no-scroll')
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  
  const totalCartPrice = cartItemsState?.reduce((acc, items) => acc + items.priceInCents, 0)

  useEffect(() => {
    const productListDiv = productListRef.current;
    const hasScroll = productListDiv.scrollHeight > productListDiv.clientHeight
    
    if (hasScroll && scrollPosition === 'no-scroll') {
      setScrollPosition('has-scroll');
    } else if (!hasScroll) {
      setScrollPosition('no-scroll')
    }
  }, [cartItemsState, scrollPosition]);
  
  function handleScroll () {
    const target = productListRef.current;

    const reachTop = target.scrollTop === 0;
    const reachBottom = target.scrollTop + target.clientHeight > target.scrollHeight - 5;

    if (reachTop) {
      setScrollPosition('scroll-top');
    } else if (reachBottom) {
      setScrollPosition('scroll-bottom');
    } else {
      setScrollPosition('scroll-middle');
    }
  };

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckout(true)

      const priceIds = cartItemsState.map(item => item.defaultPriceId)

      const { data } = await axios.post<never, AxiosResponse<CheckoutRes>, CheckoutBody>(
        '/api/checkout',
        { priceIds }
      )

      window.location.href = data.checkoutUrl
    } catch (err) {
      alert("Falha ao redirecionar para a página de checkout!")
    } finally {
      setIsCreatingCheckout(false)
    }
  }

  return (
    <CartContainer {...props}>
      <header>
        <Image
          onClick={openCloseFunction}
          src={x}
          alt="Fechar carrinho"
          width={32}
          height={32}
        />
      </header>

      <CartProductsContainer>
        <h2>Sacola de compras</h2>

        <CartProductsList
          id="product-list-container"
          ref={productListRef}
          onScroll={handleScroll}
          className={scrollPosition}
        >
          {cartItemsState.map((item, i) => {
            return (
              <CartItem
                key={i}
                item={{
                  id: item.id,
                  name: item.name,
                  imageUrl: item.imageUrl,
                  priceInCents: item.priceInCents
                }}
              />
            )
          })}
        </CartProductsList>
      </CartProductsContainer>

      <CartCheckoutContainer>
        <div>
          <span>Quantidade</span>
          <span>{cartItemsState.length} itens</span>
        </div>

        <div>
          <h3>Valor total</h3>
          <h2>
            {formatPrice(totalCartPrice)}
          </h2>
        </div>

        <button
          disabled={isCreatingCheckout || cartItemsState.length <= 0}
          onClick={handleBuyProducts}
        >
          Finalizar compra
        </button>
      </CartCheckoutContainer>
    </CartContainer>
  );
}