import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const tabs = document.querySelectorAll('.rd_tab')
    const title: any = document.querySelector('header h4')
    
    tabs.forEach((tab) => {
        tab.addEventListener('change', function(event: any) {
          title.innerHTML = `Pedido: ${event.target.id}`
          console.log(parseInt(event.target.id))
        });
    })
  }, [])

  return(
  <>
    <Container>
      <div className="tabs">
        <li>
          <input type="radio" name="tabs" id="0001" className="rd_tab" checked/>
          <label htmlFor="0001" className="tab_label">Pedido: 0001</label>
        </li>
        <li>
          <input type="radio" name="tabs" id="0002" className="rd_tab"/>
          <label htmlFor="0002" className="tab_label">Pedido: 0002</label>
        </li>
      </div>
      <header>
        <h1>Everest</h1>
        <h4>Pedido: 0001</h4>
        <div className="search">
          <input type="search" name="" id="search" />
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z"/></svg>
        </div>
      </header>
      <div className="geral">
        <h1>Produtos</h1>
        <div className="produtos">
          <a href="produtos/expresso">
            <div className="produto">
              <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/sorvete-expresso-18012021170319812383.png"/>
              <p>Sorvete expresso</p>
            </div>
          </a>
          <a href="produtos/sundae">
            <div className="produto">
              <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/mega-sundae-28042021180633827167.png"/>
              <p>Sundae</p>
            </div>
          </a>
          <a href="produtos/milkshake">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/milk-shake-03022021163459929172.png"/>
            <p>Milkshake</p>
          </div>
          </a>
          <a href="produtos/acai">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/acai-20042021161219143948.png"/>
            <p>Açaí</p>
          </div>
          </a>
          <a href="produtos/flurry">
          <div className="produto">
            <img src="https://marcelaires.files.wordpress.com/2012/12/mcdonalds-kit-kat-mcflurry.png"/>
            <p>Flurry</p>
          </div>
          </a>
          <a href="produtos/bebidas">
          <div className="produto">
            <img src="https://imperatrizgourmet.vteximg.com.br/arquivos/ids/191625-800-800/AGUA-MINERAL-NATURAL-SEM-GAS-CRYSTAL-GARRAFA-500ML.png?v=637475069576900000" height={240} width={'auto'}/>
            <p>bebidas</p>
          </div>
          </a>
          <a href="produtos/doces">
          <div className="produto">
            <img src="https://www.hiperdoces.com.br/fotos/1/1/Chicle%20Xcle%20Pinta%20Lingua%20Azul%20200g.png" height={240} width={'auto'}/>
            <p>Doces</p>
          </div>
          </a>
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
