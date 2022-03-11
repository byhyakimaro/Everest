import { GetStaticProps } from 'next'
import { Container } from '@styles/pages/home'

export default function Home({ repositoriesNames }: { repositoriesNames: string[] }) {
  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <input type="search" name="" id="search" />
      </header>
      <div className="geral">
        <h1>Produtos</h1>
        <div className="produtos">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/casquinha-19042021162207359343.png"/>
            <p>Casquinha</p>
          </div>
        </div>
        <div className="produtos">
          <div className="produto">
            <img src="https://www.mrmixbrasil.com.br/arquivos-upload/categorias/cascao-18012021170730707309.png"/>
            <p>Cascão</p>
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
