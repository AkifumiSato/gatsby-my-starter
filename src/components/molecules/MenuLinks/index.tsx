import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { zIndex } from '../../../styles/layout'
import { CSSTransition } from 'react-transition-group'

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

const Overlay = styled.div`
  animation-fill-mode: forwards;
  background-color: #000;
  display: none;
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
  &.anim-enter,
  &.anim-enter-done,
  &.anim-exit {
    display: flex;
  }
  &.anim-enter {
    animation: ${ fadeIn } .5s;
  }
  &.anim-exit {
    animation: ${ fadeOut } .5s;
  }
  &.anim-exit-done {
    display: none;
  }
`

interface IOverlay {
  isShow: boolean
}

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
  opacity: 0;
  animation-fill-mode: forwards;
  &.anim-enter-done {
    opacity: 1;
  }
  &.anim-enter {
    animation: ${ fadeIn } .5s;
    animation-delay: ${ ({ delay }: ILinkItem) => delay * 0.1 }s;
  }
  &.anim-exit {
    animation: ${ fadeOut } .5s;
  }
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
  <CSSTransition
    in={ isShow }
    timeout={ 500 }
    classNames="anim"
  >
    <Overlay>
      <LinkList>
        <CSSTransition
          in={ isShow }
          timeout={ 500 }
          classNames="anim"
        >
          <LinkItem isShow={ isShow } delay={ 1 }>
            <Links>hoge 1page</Links>
          </LinkItem>
        </CSSTransition>
        <CSSTransition
          in={ isShow }
          timeout={ 500 }
          classNames="anim"
        >
          <LinkItem isShow={ isShow } delay={ 2 }>
            <Links>hoge 2page</Links>
          </LinkItem>
        </CSSTransition>
        <CSSTransition
          in={ isShow }
          timeout={ 500 }
          classNames="anim"
        >
          <LinkItem isShow={ isShow } delay={ 3 }>
            <Links>hoge 3page</Links>
          </LinkItem>
        </CSSTransition>
        <CSSTransition
          in={ isShow }
          timeout={ 500 }
          classNames="anim"
        >
          <LinkItem isShow={ isShow } delay={ 4 }>
            <Links>hoge 4page</Links>
          </LinkItem>
        </CSSTransition>
      </LinkList>
    </Overlay>
  </CSSTransition>
)

export default MenuLinks
