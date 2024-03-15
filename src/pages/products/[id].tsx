import Image from "next/image"
import Stripe from "stripe"
import axios, { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"

import getBase64 from "@/lib/getBase64"
import { stripe } from "@/lib/stripe"
import { CheckoutBody, CheckoutRes } from "@/pages/api/checkout"

import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products"
import { useState } from "react"
import Head from "next/head"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    imageBlurData: string
    defaultPriceId: string
    formatedPrice: string
  }
}

export default function Products({product}: ProductProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckout(true)

      const { data } = await axios.post<never, AxiosResponse<CheckoutRes>, CheckoutBody>(
        '/api/checkout',
        { priceId: product.defaultPriceId }
      )

      window.location.href = data.checkoutUrl
    } catch (err) {
      alert("Falha ao redirecionar para a página de checkout!")
    } finally {
      setIsCreatingCheckout(false)
    }
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
            placeholder="blur"
            blurDataURL={product.imageBlurData}
            width={520}
            height={480}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formatedPrice}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckout} onClick={handleBuyProduct}>
            Comprar
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
  const base64 = await getBase64(product.images[0])

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        imageBlurData: base64,
        defaultPriceId: price.id,
        formatedPrice: (price.unit_amount / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
      }
    },
    revalidate: 60 * 60  * 2, // Revalidate After 2 Hours!
  }
}
