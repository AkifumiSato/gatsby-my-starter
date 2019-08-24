import * as React from 'react'
import styled from 'styled-components'
import Hamburger from '../../atoms/Hamburger'

const Wrapper = styled.header`
  background-color: #eee;
  padding: 20px;
  position: relative;
`

const HamburgerWrapper = styled.div`
  position: absolute;
  right: 10px;
`

const Logo = styled.div`
  color: #aaa;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`

const Header = () => (
  <Wrapper>
    <HamburgerWrapper>
      <Hamburger />
    </HamburgerWrapper>
    <Logo>Logo</Logo>
  </Wrapper>
)

export default Header
