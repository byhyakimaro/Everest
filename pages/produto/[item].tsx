import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

import { items } from '../../modules/items'

export default function Home({ data }:any) {

  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <div className="carrinho">
          Finalizar Pedido
          <input type="search" name="" id="search" />
        </div>
      </header>
      <div className="geral">
        <h1>{data.name}</h1>
        <img src={data.img}/>
        <input type="button" value="adicionar ao pedido +" />
        <h2>Preço R$ {String(data.price).includes('.') ? String(data.price).padEnd(4, '0') : String(data.price).padEnd(2, '.').padEnd(3, '0').padEnd(4, '0')}</h2>
      </div>
    </Container>
  </>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
  
  const paths = items.map((item: any ) => {
    return {
      params: { item: (item.code).toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async (context: any) => {

  return {
    props: {
      data: items.find(({ code }:any) => code === parseInt(context.params.item))
    },
    revalidate: 10
  }
}
