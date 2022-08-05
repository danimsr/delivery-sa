import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

const Nav = styled.div`
  background: #e31837;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavSection = styled.div`
  height: 100%;
  justify-content: align-items;
  align-items: center;
  display: flex;
`

const NavTitle = styled.h2`
  margin-left: 3rem;
  color: #fff;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #e31837;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-contet: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  border-right: 1px solid white;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavSection>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <NavTitle>Entregas Sa - Pizzaria</NavTitle>
          </NavSection>
          <NavSection>
            <NavIcon to="#">
              <FaIcons.FaShoppingCart onClick={[]} />
            </NavIcon>
          </NavSection>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <hr style={{ margin: "12px", marginTop: "30px", width: "90%", height: "1px", align: "center" }} />
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
};

export default Sidebar;