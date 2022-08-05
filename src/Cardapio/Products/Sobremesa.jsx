import React from 'react'
import sobremesaImg from '../../assets/img/sobremesa-1.jpg'
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

const Sobremesa = props => {
  const { sobremesas, titulo, } = props;
  console.log("Sobremesas na lista: ", sobremesas);

  if (!sobremesas || sobremesas.length === 0) {
    return <span>Não existem sobremesas a serem listadas</span>
  }
  return (
    <ProductsContainer>
      <ProductsHeading>{titulo}</ProductsHeading>
      <ProductWrapper>
        {sobremesas.map(sobremesas => {
          return (
            <ProductCard key={sobremesas.id}>
              <ProductImg src={sobremesaImg} alt="Foto de sobremesa" />
              <ProductInfo>
                <ProductTitle>{sobremesas.nome}</ProductTitle>
                <ProductDesc>{sobremesas.descricao}</ProductDesc>
                <ProductPrice>{`R$${sobremesas.preco} `}</ProductPrice>
                <ProductButton>Adicionar ao carrinho</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Sobremesa;