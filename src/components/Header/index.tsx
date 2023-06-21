'use client'
import React, { useState } from 'react'
import {
  Container,
  MenuButton,
  MenuItem,
  MobileMenuContent,
  //  NavBar,
  // NavItem,
} from './styles'
import { darkTheme } from '@/styles/darkTheme'
import menu from '../../../public/List.svg'
import Image from 'next/image'

const Header: React.FC = () => {
  // const [selectedItem, setSelectedItem] = useState<string>('Home')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container className={darkTheme}>
      <h1>ANANDA SÁ</h1>
      {/* <NavBar>
        <NavItem
          active={selectedItem === 'Home'}
          onClick={() => setSelectedItem('Home')}
        >
          Home
        </NavItem>
        <NavItem
          active={selectedItem === 'Sobre'}
          onClick={() => setSelectedItem('Sobre')}
        >
          Sobre
        </NavItem>
        <NavItem
          active={selectedItem === 'Portfólio'}
          onClick={() => setSelectedItem('Portfólio')}
        >
          Portfólio
        </NavItem>
  </NavBar> */}
      <div className="menu-mobile">
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <Image src={menu} alt="menu" />
        </MenuButton>
        {isOpen && (
          <MobileMenuContent>
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Portfólio</MenuItem>
          </MobileMenuContent>
        )}
      </div>
    </Container>
  )
}

export default Header
