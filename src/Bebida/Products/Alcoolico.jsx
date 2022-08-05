import React from 'react'
import pizzaImg from '../../assets/img/bebida-3.jpg'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from '../../assets/css/cardapio/ProductsElements'

const Alcoolico = props => {
  const { bebidas, titulo } = props;
  console.log("Bebidas na lista: ", bebidas);

  if (!bebidas || bebidas.length === 0) {
    return <span>Não existem bebidas a serem listadas</span>
  }
  return (
    <ProductsContainer>
      <ProductsHeading>{titulo}</ProductsHeading>
      <ProductWrapper>
        {bebidas.map(bebidas => {
            if(bebidas && bebidas.alcoolico === true){
          return (
            <ProductCard key={bebidas.id}>
              <ProductImg src={pizzaImg} alt="Foto de bebida" />
              <ProductInfo>
                <ProductTitle>{bebidas.nome}</ProductTitle>
                <ProductDesc>{bebidas.descricao}</ProductDesc>
                <ProductDesc>Teor Alcoolico: {bebidas.teorAlcoolico}%</ProductDesc>
                <ProductPrice>{`R$${bebidas.preco} `}</ProductPrice>
                <ProductButton>Adicionar ao carrinho</ProductButton>
              </ProductInfo>
            </ProductCard>
          )};
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Alcoolico;