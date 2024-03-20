import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";

import { stripe } from "@/lib/stripe";

import { ImageContainer, ImagesList, SuccessContainer } from "@/styles/pages/success";

interface SuccessProps {
  customerName: string
  productsAmount: number
  productsImg: string[]
}

export default function Success({ customerName, productsAmount, productsImg }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Igniters</title>
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesList>
          {productsImg.map((img, i) => {
            return (
              <ImageContainer key={i}>
                <Image
                  src={img}
                  alt="Imagem da camiseta"
                  width={120}
                  height={110}
                />
              </ImageContainer>
            )
          })}
        </ImagesList>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{productsAmount}</strong> camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao <strong>catálogo</strong>
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const products = session.line_items.data.map(item => {
    return item.price.product as Stripe.Product
  })

  return {
    props: {
      customerName: session.customer_details.name,
      productsAmount: products.length,
      productsImg: products.map(item => item.images[0])
    }
  }
}