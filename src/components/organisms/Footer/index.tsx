import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background-color: #eee;
  padding: 20px;
`

const Copyright = styled.p`
  color: #aaa;
  font-size: 14px;
  line-height: 1;
`

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>©copyright.domain { year }.</Copyright>
    </Wrapper>
  )
}

export default Footer
