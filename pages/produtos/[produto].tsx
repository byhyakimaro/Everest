import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

export default function Home() {
  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <input type="search" name="" id="search" />
      </header>
    </Container>
  </>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [
      { params: { produto: 'expresso' } },
      { params: { produto: 'sundae' } },
      { params: { produto: 'milkshake' } },
      { params: { produto: 'acai' } },
      { params: { produto: 'flurry' } },
      { params: { produto: 'bebidas' } },
      { params: { produto: 'doces' } }
    ],
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async () => {
  return {
    props: {
    },
    revalidate: 10
  }
}
