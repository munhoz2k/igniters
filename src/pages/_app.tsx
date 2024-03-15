import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import logoImg from '@/assets/logo.svg'
import Image from "next/image";
import { Container, Header, LogoContainer } from "@/styles/pages/app";

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src={logoImg} alt="" />
          <div>
            <h1>Igniters</h1>
            <p>shop</p>
          </div>
        </LogoContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
