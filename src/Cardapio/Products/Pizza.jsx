import React from 'react'
import pizzaImg from '../../assets/img/pizza-1.jpg'
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

const Pizza = props => {
  const { pizzas, titulo } = props;
  console.log("Pizzas na lista: ", pizzas);

  if (!pizzas || pizzas.length === 0) {
    return <span>Não existem comidas a serem listadas</span>
  }
  return (
    <ProductsContainer>
      <ProductsHeading>{titulo}</ProductsHeading>
      <ProductWrapper>
        {pizzas.map(pizzas => {
          return (
            <ProductCard key={pizzas.id}>
              <ProductImg src={pizzaImg} alt="Foto de pizza" />
              <ProductInfo>
                <ProductTitle>{pizzas.nome}</ProductTitle>
                <ProductDesc>{pizzas.descricao}</ProductDesc>
                <ProductPrice>{`R$${pizzas.preco} `}</ProductPrice>
                <ProductButton>Adicionar ao carrinho</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Pizza;