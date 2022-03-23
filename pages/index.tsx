import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'

export default function Home() {
  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <a href="pedido"><strong>Novo Pedido</strong></a>
        <input type="search" name="" id="search" />
      </header>
    </Container>
  </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  return {
    props: {
    },
    revalidate: 10*60
  }
}
