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
      return String(price).includes('.') ? price+String(0) : String(price).padEnd(2, '.').padEnd(3, '0').padEnd(4, '0')
    }

    pedido.items.forEach((item: any) => {
      const produto = items.find(({ code }:any) => code === item)
      total_price = total_price + produto.price
      const item_mk = document.createElement('div')
      item_mk.className = 'item_mk'
      const checkBox = document.createElement('input')
      checkBox.type = 'checkbox'
      item_mk.appendChild(checkBox)
      const codeItem = document.createElement('div')
      codeItem.className = 'codeItem'
      codeItem.innerHTML = `<strong>${produto.code}</strong>`
      item_mk.appendChild(codeItem)
      const nameItem = document.createElement('div')
      nameItem.className = 'nameItem'
      nameItem.innerHTML = `<strong>${produto.name}</strong>`
      item_mk.appendChild(nameItem)
      const priceItem = document.createElement('div')
      priceItem.className = 'priceItem'
      priceItem.innerHTML = `<strong>R$ ${filterPrice(produto.price)}</strong>`
      item_mk.appendChild(priceItem)
      document.querySelector('.items_mk')?.appendChild(item_mk)
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
        <div className="items_mk">
          <div className="titles">
            <input type="checkbox" name="" id="" />
            <div><strong>Código</strong></div>
            <div><strong>Nome</strong></div>
            <div><strong>Preco</strong></div>
            <div><strong>Discrição</strong></div>
          </div>
        </div>
        <div className="totalAllot">
          <div className="total_pd"></div>
          <input className="endItems" type="button" value="Finalizar Pedido" />
        </div>
        <div className="method_payment">
          <div className="title_method">
            <strong>Forma de Pagamento</strong>
            <div className="button">
              <input type="button" value="Maquininha" />
              <input type="button" value="Dinheiro" />
              <input type="button" value="Maquininha/Dinheiro" />
            </div>
          </div>
        </div>
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
