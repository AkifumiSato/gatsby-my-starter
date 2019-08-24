import * as React from 'react'
import { GlobalStyles } from '../../../styles/global'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    { children }
  </>
)

export default Layout
