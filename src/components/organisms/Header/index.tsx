import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: #eee;
  padding: 20px;
`

const Logo = styled.div`
  color: #aaa;
  font-size: 30px;
  font-weight: bold;
`

const Header = () => (
  <Wrapper>
    <Logo>Logo</Logo>
  </Wrapper>
)

export default Header
