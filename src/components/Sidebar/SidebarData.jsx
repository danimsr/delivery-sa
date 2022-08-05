import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Cardápio',
        path: '#',
        icon: <RiIcons.RiRestaurant2Fill /> ,
        iconClosed: <RiIcons.RiArrowDownSFill /> ,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subnav : [
            {
                title: 'Produtos',
                path: '/comida/cardapio',
                icon: <RiIcons.RiRestaurant2Fill /> 
            },
            {
                title: 'Pizza',
                path: '/comida/pizza',
                icon: <FaIcons.FaPizzaSlice /> 
            },
            {
                title: 'Sobremesa',
                path: '/comida/sobremesa',
                icon: <FaIcons.FaBirthdayCake /> 
            }
        ]
    },
    {
        title: 'Bebidas',
        path: '#',
        icon: <IoIcons.IoIosWater /> ,
        iconClosed: <RiIcons.RiArrowDownSFill /> ,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subnav : [
            {
                title: 'Refrigerantes',
                path: '/bebida/cardapio',
                icon: <IoIcons.IoIosWater /> 
            },
            {
                title: 'Bebidas alcoólicas',
                path: '/bebida/alcoolico',
                icon: <IoIcons.IoMdWine /> 
            }
        ]
    },
    {
        title: 'Serviços',
        path: '#',
        icon: <RiIcons.RiSettings3Fill /> ,
        iconClosed: <RiIcons.RiArrowDownSFill /> ,
        iconOpened: <RiIcons.RiArrowUpSFill /> ,
        subnav : [
            {
                title: 'Lista de produtos',
                path: '/comida/lista',
                icon: <RiIcons.RiSettings3Fill /> 
            },
            {
                title: 'Cadastro de produtos',
                path: '/comida/cadastro',
                icon: <RiIcons.RiSettings3Fill /> 
            },
            {
                title: 'Lista de bebidas',
                path: '/bebida/lista',
                icon: <RiIcons.RiSettings3Fill /> 
            },
            {
                title: 'Cadastro de bebidas',
                path: '/bebida/cadastro',
                icon: <RiIcons.RiSettings3Fill /> 
            }
        ]
    }
]