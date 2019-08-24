import * as React from 'react'
import styled, { css } from 'styled-components'
import { zIndex } from '../../../styles/layout'

interface IWrapper {
  side: number
}

const Wrapper = styled.button`
  box-sizing: content-box;
  display: block;
  height: ${ ({ side }: IWrapper) => side }px;
`

interface IThreeLine extends IWrapper {
  open: boolean;
}

const ThreeLine = styled.div`
  height: ${ ({ side }: IThreeLine) => side - 1 }px;
  position: relative;
  width: ${ ({ side }: IThreeLine) => side * 1.2 }px;
  z-index: ${zIndex.overlayContained};
  & > span {
    background-color: #999;
    content: '';
    display: block;
    height: 1px;
    width: ${ ({ side }: IThreeLine) => side * 1.2 }px;
    position: absolute;
    top: 0;
    &:nth-child(2){
      top: 50%;
    }
    &:nth-child(3){
      top: 100%;
    }
    ${ ({ open }: IThreeLine) => open ? css`
      transition: .5s;
      &:first-child {
        background-color: #fff;
        top: 50%;
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        background-color: transparent!important;
      }
      &:nth-child(3) {
        background-color: #fff;
        top: 50%;
        transform: rotate(45deg);
      }
    ` : css`
      transition: .3s;
    ` }
    }
`

interface IButton {
  open?: boolean
  side?: number
  onClick: () => void
}

const Hamburger: React.FC<IButton> = ({ open = false, side = 25, onClick }) => (
  <Wrapper side={ side } onClick={ onClick }>
    <ThreeLine open={ open } side={ side }>
      <span />
      <span />
      <span />
    </ThreeLine>
  </Wrapper>
)

export default Hamburger
