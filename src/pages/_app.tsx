import Image from "next/image";
import type { AppProps } from "next/app";

import CartContextProvider from "@/contexts/cartContext";
import Cart from "@/components/cart";
import CartButton from "@/components/cartButton";

import { globalStyles } from "@/styles/global";
import { Container, Header, LogoContainer } from "@/styles/pages/app";

import logoImg from '@/assets/logo.svg'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  function openCloseCart() {
    document.getElementById('cart-container').classList.toggle('cart-open')
  }

  return (
    <Container>
      <CartContextProvider>
        <Header>
          <LogoContainer>
            <Image src={logoImg} alt="" />
            <div>
              <h1>Igniters</h1>
              <p>shop</p>
            </div>
          </LogoContainer>

          <CartButton openCloseFunction={openCloseCart} />
        </Header>

        <Cart id='cart-container' openCloseFunction={openCloseCart} />

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
