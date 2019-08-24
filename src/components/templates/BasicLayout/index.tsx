import * as React from 'react'
import { GlobalStyles } from '../../../styles/global'
import styled from 'styled-components'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const Contents = styled.div`
  min-height: calc(100vh - 80px - 54px);
  position: relative;
`

const BasicLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Header height={ 80 } />
    <Contents>
      { children }
    </Contents>
    <Footer />
  </>
)

export default BasicLayout
