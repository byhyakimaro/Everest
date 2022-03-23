import { useEffect } from 'react'

export function Header(props: any) {
  
  useEffect(() => {
    const tabs: any = document.querySelector('.tabs .list')

    function createTab(id:any, selected:any) {
      const list = document.createElement('li')
      const number = String(id).padStart(4, '0')
      list.innerHTML = `
      <input type="radio" name="tabs" id="${number}" class="rd_tab" ${id === selected ? 'checked' : null}>
      <label for="${number}" class="tab_label">Pedido: ${number}
      <div class="close" data-close="${number}">
        <svg data-close="${number}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" fill="white"><path data-close="${number}" d="M0 0h24v24H0V0z" fill="none"/><path data-close="${number}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
      </div>
      </label>`
      tabs.appendChild(list)
    }

    function getUniqueListBy(arr: string[], key: any) {
      return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const add: any = document.querySelector('.add svg')
    add.addEventListener('click', function(event: any) {
      const n_pedidos: any = JSON.parse(localStorage.getItem('n_pedido') || '[]')
      createTab(tabs.childElementCount+1, n_pedidos)
      const pedidos: any = JSON.parse(localStorage.getItem('pedidos') || '[]')
      pedidos.push( { id: tabs.childElementCount, "items": [] } )
      localStorage.setItem('pedidos', JSON.stringify(getUniqueListBy(pedidos, 'id')))
    })

    tabs.addEventListener('click', function(event: any) {
      if(event.target.dataset.close){
        const tab: any = document.querySelector(`input[id="${event.target.dataset.close}"]`)?.parentNode
        tab.remove()
        const pedidos: any = JSON.parse(localStorage.getItem('pedidos') || '[]')
        const filtered = pedidos.filter(function(element: any) { return element.id != parseInt(event.target.dataset.close) })
        localStorage.setItem('pedidos', JSON.stringify(getUniqueListBy(filtered, 'id')))
      }
      if (event.target.id) {
        localStorage.setItem('n_pedido', JSON.stringify(parseInt(event.target.id)))
      }
    })

    const pedidos: any = getUniqueListBy(JSON.parse(localStorage.getItem('pedidos') || '[]'), 'id')
    const n_pedidos: any = JSON.parse(localStorage.getItem('n_pedido') || '[]')
    if (pedidos) {
      pedidos.forEach(({ id }:any) => {
        createTab(id, n_pedidos)
      })
    } else {
      createTab(1, 1)
    }

  }, [])
  
  return (
    <>
      <div className="tabs">
        <div className="list"></div>
        <div className="add">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="white" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </div>
      </div>
      <header>
        <h1>Everest</h1>
        <div className="endItem">
          <a href="../marketplace">Visualizar Pedido</a>
          <a href="../pedido">Adicionar Items</a>
        </div>
        <div className="search">
          <input type="search" name="" id="search" />
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="white" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </header>
    </>
  )
}
