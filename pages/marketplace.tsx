import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'

import { Header } from 'components/header'
import { useEffect } from 'react'

import { items } from '../modules/items'

export default function Home() {

  useEffect(() => {
    let total_price: any = 0
    const pedidos: any = JSON.parse(localStorage.getItem('pedidos') || '[]')
    const n_pedidos: any = JSON.parse(localStorage.getItem('n_pedido') || '[]')
    
    const pedido = pedidos.find(({ id }:any) => id === n_pedidos)
    
    function filterPrice(price: any) {
      return String(price).includes('.') ? String(price).padEnd(4, '0') : String(price).padEnd(2, '.').padEnd(3, '0').padEnd(4, '0')
    }

    pedido.items.forEach((item: any) => {
      const div = document.createElement('div')
      const produto = items.find(({ code }:any) => code === item)
      total_price = total_price + produto.price
      div.innerHTML = `<strong>${produto.name}: preco R$ ${filterPrice(produto.price)}</strong>`
      document.querySelector('.items_mk')?.appendChild(div)
    })

    const div = document.createElement('h3')
    div.innerHTML = `<strong>Preco Total: R$ ${filterPrice(total_price)}</strong>`
    document.querySelector('.total_pd')?.appendChild(div)
  }, [])

  return(
  <>
    <Container>
      <Header></Header>
      <div className="marketplace">
        <div className="items_mk"></div>
        <div className="total_pd"></div>
      </div>
    </Container>
  </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  return {
    props: {
    },
    revalidate: 10
  }
}