import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

import { items } from '../../modules/items'

import { Header } from 'components/header'
import { useEffect } from 'react'

export default function Home({ data }:any) {

  useEffect(() => {
    const pedidos: any = JSON.parse(localStorage.getItem('pedidos') || '[]')
    const n_pedido: any = JSON.parse(localStorage.getItem('n_pedido') || '[]')
    const { items } = pedidos.find(({ id }:any) => id === n_pedido)
    
    document.addEventListener('click', function(event: any) {
      
      if (event.target.type === 'button') {
        console.log(items)
        if(items) {
          items.push(data.code)
          alert('Produto adicionado')
          localStorage.setItem('pedidos', JSON.stringify(pedidos))
        }
      }
    })
  }, [])

  function filterPrice(price: any) {
    return String(price).includes('.') ? price+String(0) : String(price).padEnd(2, '.').padEnd(3, '0').padEnd(4, '0')
  }

  return(
  <>
    <Container>
      <Header></Header>
      <div className="items">
        <div className="item">
          <h4>{data.name}</h4>
          <img src={data.img}/>
          <input className="addItem" type="button" value="adicionar ao pedido +" />
          <h3>Preço R$ {filterPrice(data.price)}</h3>
        </div>
        <div className="discricao">
          <h3>Discrição</h3>
        </div>
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
