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
  display: block;
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

export default Overlay
