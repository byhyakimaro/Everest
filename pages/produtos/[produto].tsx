import { GetStaticProps, GetStaticPaths } from 'next'
import { Container } from '@styles/pages/home'

const products: any = {
  "expresso": {
    "items" : [
      {
        "name": "Casquinha",
        "img": "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/sorvete-expresso-18012021170319812383.png"
      },
      {
        "name": "Casquinha Recheada",
        "img" : "https://bk-cms-dev.s3.amazonaws.com/_800x600_crop_center-center_none/Casquinha-Recheda-Ovomaltine-thumb_2021-09-16-161406_rtqu.png?mtime=20210916121407&focal=none&tmtime=20210916121530"
      },
      {
        "name": "Cascao",
        "img" : "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/cascao-18012021170730707309.png"
      },
      {
        "name": "Cascao Recheado",
        "img" : "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/cascao-trufado-21012021172215134119.png"
      }
    ]
  },
  "sundae": {
    "items" : [
      {
        "name": "Sundae Tradicional",
        "img": "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/sorvete-sundae-18012021170330133303.png"
      }
    ]
  }
}

export default function Home({ items }:any) {
  
  const item = items[0].name

  return(
  <>
    <Container>
      <header>
        <h1>Everest</h1>
        <h1>{item}</h1>
        <input type="search" name="" id="search" />
      </header>
    </Container>
  </>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [
      { params: { produto: 'expresso' } },
      { params: { produto: 'sundae' } },
      { params: { produto: 'milkshake' } },
      { params: { produto: 'acai' } },
      { params: { produto: 'flurry' } },
      { params: { produto: 'bebidas' } },
      { params: { produto: 'doces' } }
    ],
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async (context: any) => {

  const { items } = products[context.params.produto]

  return {
    props: {
      items
    },
    revalidate: 10
  }
}
