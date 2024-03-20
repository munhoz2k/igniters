import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link"
import Head from "next/head";
import { GetStaticProps } from "next";
import { MouseEventHandler, useContext } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ShoppingBag } from "phosphor-react";

import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/lib/formatPrice";
import { CartContext } from "@/contexts/cartContext";

import { HomeContainer, Product, ProductFooter } from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    defaultPriceId: string
    priceInCents: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartItemsState } = useContext(CartContext)

  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.75,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Igniters</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <div className="left-shadow"></div>
        {products.map(p => {
          return (
            <Link href={`/products/${p.id}`} key={p.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image
                  src={p.imageUrl}
                  alt="Imagem da Camiseta"
                  width={520}
                  height={480}
                />

                <ProductFooter>
                  <div>
                    <strong>{p.name}</strong>
                    <span>{formatPrice(p.priceInCents)}</span>
                  </div>

                  <button 
                    disabled={cartItemsState.length >= 10}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(p)
                    }}
                  >
                    <ShoppingBag size={32} />
                  </button>
                </ProductFooter>
              </Product>
            </Link>
          )
        })}
        <div className="right-shadow"></div>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      priceInCents: price.unit_amount
    }
  })

  return {
    props: {
      products
    }, 
    revalidate: 60 * 60 * 2, // Revalidate After 2 Hours!
  }
}
