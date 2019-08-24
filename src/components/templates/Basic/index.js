import * as React from 'react'
import { GlobalStyles } from '../../../styles/global'
import Header from '../../organisms/Header'

const Basic = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    { children }
  </>
)

export default Basic
