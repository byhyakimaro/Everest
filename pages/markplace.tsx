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
    
    pedido.items.forEach((item: any) => {
      const div = document.createElement('div')
      const produto = items.find(({ code }:any) => code === item)
      total_price = total_price + produto.price
      div.innerHTML = `<strong>${produto.name}: preco ${produto.price}</strong>`
      document.body.appendChild(div)
    })

    const div = document.createElement('div')
    div.innerHTML = `<strong>Preco Total ${total_price}</strong>`
    document.body.appendChild(div)
  }, [])

  return(
  <>
    <Container>
      <Header></Header>
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
