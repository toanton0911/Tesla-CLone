import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux';

function Header() {

  const cars = useSelector(selectCars)
  console.log(cars);

  const [burgerStatus, setBurgerStatus] = useState(false);

  const closeBurgerNav = () => {
    setBurgerStatus(false)
  }

  const openBurgerNav = () => {
    setBurgerStatus(true)
  }

  return (
    <Container>
        <a href="/">
          <img src="/images/logo.svg" alt="Logo"></img>
        </a>

        <Menu>
            {cars && cars.map((car,index) => (
              <a key={index} href="/">{car}</a>
            ))}
        </Menu>

        <RightMenu>
            <a href="/">Shop</a>
            <a href="/">Tesla Account</a>
            <CustomMenu onClick = {openBurgerNav}>
            
            </CustomMenu>
        </RightMenu> 

        <BurgerNav show = {burgerStatus}>
          <CloseWrapper>
            <CustomCloseButton onClick ={closeBurgerNav}></CustomCloseButton> 
          </CloseWrapper>
          {cars && cars.map((car,index) => (
              <li key={index}><a  href="/">{car}</a></li>
          ))}
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">used Inventory</a></li>
          <li><a href="/">Trade-in</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadaster</a></li>
          <li><a href="/">Semi</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    transform: translateY(0)
`

const BurgerNav = styled.ul`
    position: fixed;
    background-color: white;
    right: 0;
    top: 0;
    bottom: 0;
    list-style-type: none;
    width: 300px;
    z-index: 100;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    ${props => props.show ? "transform: translateX(0)" : "transform: translateX(100%)"};
    transition: transform 0.2s;
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,.2);
      a {
        font-weight: 600;
      }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomCloseButton = styled(CloseIcon)`
    cursor: pointer;
`