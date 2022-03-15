import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

import { products } from '../../modules/products'

export default function Home({ items }:any) {

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
    paths: [],
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
