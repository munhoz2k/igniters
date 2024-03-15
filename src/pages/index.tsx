import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link"
import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";


import { stripe } from "@/lib/stripe";
import { HomeContainer, Product, ProductFooter } from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css"
import getBase64 from "@/lib/getBase64";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    imageBlurData: string
    formatedPrice: string
  }[]
}

export default function Home({ products }: HomeProps) {
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


        {products.map(p => {
          return (
            <Link href={`/products/${p.id}`} key={p.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image
                  src={p.imageUrl}
                  alt="Imagem da Camiseta"
                  placeholder="blur"
                  blurDataURL={p.imageBlurData}
                  width={520}
                  height={480}
                />

                <ProductFooter>
                  <strong>{p.name}</strong>
                  <span>{p.formatedPrice}</span>
                </ProductFooter>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price']
  })

  const base64Promises = data.map(p => getBase64(p.images[0]))
  const base64Array = await Promise.all(base64Promises)

  const products = data.map((product, i) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      imageBlurData: base64Array[i],
      formatedPrice: (price.unit_amount / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  })

  return {
    props: {
      products
    }, 
    revalidate: 60 * 60 * 2, // Revalidate After 2 Hours!
  }
}
