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
        document.querySelector(`input[id="${event.target.dataset.close}"]`)?.parentNode?.remove()
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
          <a href="../markplace">Visualizar Pedido</a>
          <a href="../pedido">Adicionar Items</a>
        </div>
        <div className="search">
          <input type="search" name="" id="search" />
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z"/></svg>
        </div>
      </header>
    </>
  )
}
