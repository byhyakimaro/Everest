import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'

import { Header } from 'components/header'
import { useEffect } from 'react'

import { items } from '../modules/items'

export default function Home() {

  useEffect(() => {
    const pedidos: any = JSON.parse(localStorage.getItem('pedidos') || '[]')
    const n_pedidos: any = JSON.parse(localStorage.getItem('n_pedido') || '[]')
    
    const pedido = pedidos.find(({ id }:any) => id === n_pedidos)
    
    pedido.items.forEach((item: any) => {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${items.find(({ code }:any) => code === item).name}</strong>`
      document.body.appendChild(div)
    })

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
