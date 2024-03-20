import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { GetStaticPaths, GetStaticProps } from "next"
import { useContext, useState } from "react"
import axios, { AxiosResponse } from "axios"

import { stripe } from "@/lib/stripe"
import { formatPrice } from "@/lib/formatPrice"
import { CartContext } from "@/contexts/cartContext"
import { CheckoutBody, CheckoutRes } from "@/pages/api/checkout"

import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    imageBlurData: string
    defaultPriceId: string
    priceInCents: number
  }
}

export default function Products({ product }: ProductProps) {
  const { addItem, cartItemsState } = useContext(CartContext)

  function addToCart() {
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Igniters</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image 
            src={product.imageUrl}
            alt="Imagem da camiseta"
            width={520}
            height={480}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.priceInCents)}</span>

          <p>{product.description}</p>

          <button
            disabled={cartItemsState.length >= 10}
            onClick={addToCart}
          >
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_PjYGxCsnwxdHxr'
        }
      },
    ],

    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productsId = params.id

  const product = await stripe.products.retrieve(productsId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        priceInCents: price.unit_amount,
      }
    },
    revalidate: 60 * 60  * 2, // Revalidate After 2 Hours!
  }
}
