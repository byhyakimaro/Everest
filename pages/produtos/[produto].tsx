import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

import { products } from '../../modules/products'

export default function Home({ items }:any) {
  
  const item = items[0].name

  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <h1>{item}</h1>
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

export const getStaticProps : GetStaticProps = async (context: any) => {

  const { items } = products[context.params.produto]

  return {
    props: {
      items
    },
    revalidate: 10
  }
}
