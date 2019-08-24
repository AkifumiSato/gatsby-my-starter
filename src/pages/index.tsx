import * as React from 'react'
import styled from 'styled-components'
import BasicLayout from '../components/templates/BasicLayout'

const Contents = styled.div`
  display: block;
  padding: 30px;
`

export default () => (
  <BasicLayout>
    <Contents>Hello world!</Contents>
  </BasicLayout>
)
