import React from 'react'
import styled from 'styled-components'
import Basic from '../components/templates/Basic'

const Contents = styled.div`
  display: block;
  padding: 30px;
`

export default () => (
  <Basic>
    <Contents>Hello world!</Contents>
  </Basic>
)
