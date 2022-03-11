import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'

export default function Home({ repositoriesNames }: { repositoriesNames: string[] }) {
  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <h4>Pedido: 0001</h4>
        <input type="search" name="" id="search" />
      </header>
      <div className="geral">
        <h1>Produtos</h1>
        <div className="produtos">
          <a href="expresso">
            <div className="produto">
              <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/sorvete-expresso-18012021170319812383.png"/>
              <p>Sorvete expresso</p>
            </div>
          </a>
          <a href="sundae">
            <div className="produto">
              <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/mega-sundae-28042021180633827167.png"/>
              <p>Sundae</p>
            </div>
          </a>
          <a href="milkshake">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/milk-shake-03022021163459929172.png"/>
            <p>Milkshake</p>
          </div>
          </a>
          <a href="acai">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/acai-20042021161219143948.png"/>
            <p>Açaí</p>
          </div>
          </a>
          <a href="flurry">
          <div className="produto">
            <img src="https://marcelaires.files.wordpress.com/2012/12/mcdonalds-kit-kat-mcflurry.png"/>
            <p>Flurry</p>
          </div>
          </a>
          <a href="bebidas">
          <div className="produto">
            <img src="https://imperatrizgourmet.vteximg.com.br/arquivos/ids/191625-800-800/AGUA-MINERAL-NATURAL-SEM-GAS-CRYSTAL-GARRAFA-500ML.png?v=637475069576900000" height={240} width={'auto'}/>
            <p>bebidas</p>
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
