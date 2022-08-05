import React from 'react'
import {
    HeroContainer,
    HeroContent, 
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn, 
} from '../../assets/css/hero/HeroElements'

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroContainer>
        <HeroContent>
            <HeroItems>
                <HeroH1>Melhor Pizza do Mundo!</HeroH1>
                <HeroP>Pronta em 60 segundos</HeroP>
                <Link to={`/comida/cardapio`}>
                  <HeroBtn>Fazer Pedido</HeroBtn>
                </Link>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero