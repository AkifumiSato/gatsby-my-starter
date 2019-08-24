import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { zIndex } from '../../../styles/layout'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    z-index: -1;
    opacity: 0;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

interface IOverlay {
  isShow: boolean
}

const Overlay = styled.div`
  animation: ${ ({ isShow }: IOverlay) => isShow ? fadeIn : fadeOut } .5s;
  animation-fill-mode: forwards;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: ${ zIndex.overlay };
`

const LinkList = styled.ul`
  & > li:not(:first-child) {
    margin-top: 30px;
  }
`

interface ILinkItem {
  isShow: boolean
  delay: number
}

const LinkItem = styled.li`
  animation: ${ ({ isShow }: ILinkItem) => isShow ? fadeIn : 'none' } .5s;
  animation-delay: ${ ({ delay }: ILinkItem) => delay * 0.1 }s;
  animation-fill-mode: forwards;
  opacity: 0;

`

const Links = styled.a`
  color: #fff;
  font-size: 20px;
  display: block;
  transition: .5s;
  &:hover {
    opacity: .5;
  }
`

interface IMenuLinks extends IOverlay {
}

const MenuLinks: React.FC<IMenuLinks> = ({ isShow }) => (
  <Overlay isShow={ isShow }>
    <LinkList>
      <LinkItem isShow={ isShow } delay={ 1 }>
        <Links>hoge 1page</Links>
      </LinkItem>
      <LinkItem isShow={ isShow } delay={ 2 }>
        <Links>hoge 2page</Links>
      </LinkItem>
      <LinkItem isShow={ isShow } delay={ 3 }>
        <Links>hoge 3page</Links>
      </LinkItem>
      <LinkItem isShow={ isShow } delay={ 4 }>
        <Links>hoge 4page</Links>
      </LinkItem>
    </LinkList>
  </Overlay>
)

export default MenuLinks
