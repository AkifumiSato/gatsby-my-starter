import * as React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: block;
  padding: 5px;
`

const Inner = styled.div`
  height: 30px;
  position: relative;
  width: 30px;
`

interface IButton {
  open?: boolean;
}

const Button = styled.span`
  &,
  &:before,
  &:after {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
  }
  & {
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &:before {
    top: -15px;
    transition: .3s;
  }
  
  &:after {
    top: 15px;
    transition: .3s;
  }
  ${ (props: IButton) => props.open ? css`
    transition: .3s;
    background-color: transparent!important;
    &:before {
      top: 0;
      transform: rotate(-45deg);
    }
    &::after {
      top: 0;
      transform: rotate(45deg);
    }
  ` : css`
    transition: .3s;
  ` }
`

const Hamburger: React.FC<IButton> = ({ open = false }) => (
  <Wrapper>
    <Inner>
      <Button open={ open } />
    </Inner>
  </Wrapper>
)

export default Hamburger
