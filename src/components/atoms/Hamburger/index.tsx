import * as React from 'react'
import styled, { css } from 'styled-components'

interface IButton {
  open?: boolean;
  side?: number;
}

interface IWrapper {
  side: number;
}

const Wrapper = styled.button`
  box-sizing: content-box;
  display: block;
  height: ${ ({ side }: IWrapper) => side }px;
  padding: 5px;
`

interface IThreeLine {
  open: boolean;
  side: number;
}

const ThreeLine = styled.div`
  height: ${ ({ side }: IThreeLine) => side - 1 }px;
  position: relative;
  width: ${ ({ side }: IThreeLine) => side }px;
  & > span {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    width: ${ ({ side }: IThreeLine) => side }px;
    position: absolute;
    top: 0;
    &:nth-child(2){
      top: 50%;
    }
    &:nth-child(3){
      top: 100%;
    }
    ${ ({ open }: IButton) => open ? css`
      transition: .3s;
      &:first-child {
        background-color: transparent!important;
      }
      &:nth-child(2) {
        top: 50%;
        transform: rotate(-45deg);
      }
      &:nth-child(3) {
        top: 50%;
        transform: rotate(45deg);
      }
    ` : css`
      transition: .3s;
    ` }
    }
`

const Hamburger: React.FC<IButton> = ({ open = false, side = 30 }) => (
  <Wrapper side={ side }>
    <ThreeLine open={ open } side={ side }>
      <span />
      <span />
      <span />
    </ThreeLine>
  </Wrapper>
)

export default Hamburger
