import * as React from 'react'
import styled from 'styled-components'
import Hamburger from '../../atoms/Hamburger'

interface IHeader {
  height: number
}

const Wrapper = styled.header`
  align-items: center;
  background-color: #eee;
  display: flex;
  height: ${ ({ height }: IHeader) => height }px;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
`

const Logo = styled.div`
  color: #aaa;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`

const Header: React.FC<IHeader> = ({ height }) => (
  <Wrapper height={ height }>
    <Logo>Logo</Logo>
    <Hamburger />
  </Wrapper>
)

export default Header
